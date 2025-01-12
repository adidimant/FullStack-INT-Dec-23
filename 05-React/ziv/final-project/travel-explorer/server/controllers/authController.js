import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

// אם המודל כבר קיים, פשוט נייבא אותו
let User;
try {
  User = mongoose.model('User'); // מנסה לגשת למודל אם הוא כבר קיים
} catch (error) {
  // אם לא קיים, ניצור את המודל
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [8, 'Password must be at least 8 characters long'],
      select: false
    },
    avatar: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  // Hash password before saving
  userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });

  // Compare password method
  userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
      return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
      throw new Error(error);
    }
  };

  // יצירת המודל אם הוא לא קיים
  User = mongoose.model('User', userSchema);
}

export default User;

// פונקציה לרישום משתמש חדש
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);  // הוספת console.error כדי לראות את השגיאה
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};

// פונקציה להתחברות
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);  // הוספת console.error כדי לראות את השגיאה
    res.status(500).json({ message: 'Error logging in' });
  }
};

// פונקציה לאימות טוקן
export const verifyToken = async (req, res) => {
  const { token } = req.body;

  try {
    // אימות הטוקן יכול להתבצע כאן
    res.status(200).json({ valid: true });
  } catch (error) {
    console.error('Error verifying token:', error);  // הוספת console.error כדי לראות את השגיאה
    res.status(500).json({ valid: false });
  }
};
