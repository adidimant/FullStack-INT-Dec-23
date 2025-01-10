import { memo, useCallback, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "../../components/Box/Box";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Button from "../../components/Button/Button";
import { axiosClient } from "../../axiosClient";
import Alert from '@mui/material/Alert';
import "./UpdateDetails.css";
import { extractUserIdFromToken } from "../../utils";


interface UserDetails {
  fullName: string;
  companyName: string;
  companyNumber: string;
  address: string;
  city: string;
  profilePic: File | string | null;
}

type UserDetailsKeys = keyof UserDetails;

const fieldLabels: Record<UserDetailsKeys, string> = {
  fullName: "שם מלא",
  companyName: "שם החברה",
  companyNumber: "מספר חברה",
  address: "כתובת",
  city: "עיר",
  profilePic: "תמונת פרופיל",
};

function UpdateDetails() {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "",
    companyName: "",
    companyNumber: "",
    address: "",
    city: "",
    profilePic: null,
  });

  const [editFields, setEditFields] = useState({
    fullName: false,
    companyName: false,
    companyNumber: false,
    address: false,
    city: false,
    profilePic: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  //טעינת פרטי המשתמש
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = extractUserIdFromToken();
        const { data } = await axiosClient.get(`/api/users/details/${userId}`);
        setUserDetails(data);
        
        // יצירת תצוגה מקדימה אם יש תמונת פרופיל קיימת
        if (data.profilePic && typeof data.profilePic === 'string') {
          setImagePreview(data.profilePic);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);
  
  // הוק לניקוי ה-URL של תמונת הפרופיל
  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

   
  const handleEditToggle = (field: UserDetailsKeys) => {
    setEditFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

   // הוק לעדכון פרטי המשתמש
  const handleFieldChange = useCallback((field: UserDetailsKeys, value: any) => {
    if (field === 'profilePic' && value instanceof File) {
      // Create preview URL for the new image
      const previewUrl = URL.createObjectURL(value);
      setImagePreview(previewUrl);
      setUserDetails(prev => ({
        ...prev,
        [field]: value
      }));
    } else {
      setUserDetails(prev => ({
        ...prev,
        [field]: value
      }));
    }
  }, []);

  // הוק לניהול שמירה
  const handleUpdateDetails = useCallback(async () => {
    setLoading(true);
    try {
      const userId = extractUserIdFromToken();

      const formData = new FormData();
      formData.append("fullName", userDetails.fullName);
      formData.append("companyName", userDetails.companyName);
      formData.append("companyNumber", userDetails.companyNumber);
      formData.append("address", userDetails.address || '');
      formData.append("city", userDetails.city || '');
      
      if (userDetails.profilePic instanceof File) {
        formData.append("profilePic", userDetails.profilePic);
      }

      const response = await axiosClient.put(`/api/users/details/${userId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess(true);
      
      // אפס מצבי עריכה לאחר עדכון
      setEditFields(prev => Object.keys(prev).reduce((acc, key) => ({
        ...acc,
        [key]: false
      }), {} as typeof prev));

      //עידכון תצוגה מקדימה
      if (response.data?.profilePic) {
        setImagePreview(response.data.profilePic);
      }
    } catch (error) {
      console.error("Error updating user details:", error);
      setError("שגיאה בעדכון פרטים, נסה שוב מאוחר יותר");
    } finally {
      setLoading(false);
    }
  }, [userDetails]);

  const renderField = (field: UserDetailsKeys) => {
    if (field === 'profilePic') {
      return (
        <div className="update-details-field" key={field}>
          <label htmlFor={field}>{fieldLabels[field]}</label>
          {editFields[field] ? (
            <>
              <Input
                id={field}
                type="file"
                onChange={(e) => handleFieldChange(field, e.target.files?.[0])}
                accept="image/*"
                fullFrame={true}
              />
              {imagePreview && (
                <img 
                  src={imagePreview}
                  alt="Profile preview"
                  className="profile-preview"
                  style={{ maxWidth: '200px', marginTop: '10px' }}
                />
              )}
            </>
          ) : (
            <img 
              src={imagePreview || '/default-profile.jpg'}
              alt="Profile"
              className="profile-image"
              style={{ maxWidth: '200px' }}
            />
          )}
          <span className="icon" onClick={() => handleEditToggle(field)}>
            {editFields[field] ? <SaveIcon /> : <EditIcon />}
          </span>
        </div>
      );
    }

    return (
      <div className="update-details-field" key={field}>
        <label htmlFor={field}>{fieldLabels[field]}</label>
        {editFields[field] ? (
          <Input
            id={field}
            type="text"
            value={userDetails[field]}
            onChange={(e) => handleFieldChange(field, e.target.value)}
            fullFrame={true}
          />
        ) : (
          <p>{userDetails[field]}</p>
        )}
        <span className="icon" onClick={() => handleEditToggle(field)}>
          {editFields[field] ? <SaveIcon /> : <EditIcon />}
        </span>
      </div>
    );
  };

  return (
    <Box className="update-details-form">
      <h3>עדכון פרטים</h3>
      {Object.keys(userDetails).map((field) => 
        renderField(field as UserDetailsKeys)
      )}
      <Button
        name="updateDetailsButton"
        onClick={handleUpdateDetails}
        text={loading ? <CircularProgress size="20px" color="inherit" /> : "עדכן פרטים"}
      />
      {success && (
        <Alert severity="success" className="alert-message">
          פרטים עודכנו בהצלחה!
        </Alert>
      )}
      {error && (
        <Alert severity="error" className="alert-message">
          {error}
        </Alert>
      )}
    </Box>
  );
}

export default memo(UpdateDetails);