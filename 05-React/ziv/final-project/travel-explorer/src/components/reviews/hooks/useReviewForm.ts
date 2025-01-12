import { useState, useEffect } from 'react';
import { ReviewFormData } from '../../../types/review.types';

const initialFormData: ReviewFormData = {
  authorName: '',
  isAnonymous: false,
  state: '',
  content: '',
  rating: 0,
  photoUrl: '',
  countryId: '',
};

export const useReviewForm = (onSubmit: (data: ReviewFormData) => void) => {
  const [formData, setFormData] = useState<ReviewFormData>(initialFormData);

  // קריאה מ-localStorage אם יש נתונים שמורים
  useEffect(() => {
    const savedData = localStorage.getItem('reviewFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // שמירה ב-localStorage כל פעם שהנתונים משתנים
  useEffect(() => {
    // אם יש שינוי ב-formData, נשמור אותו ב-localStorage
    if (formData) {
      localStorage.setItem('reviewFormData', JSON.stringify(formData));
    }
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // מחיקת הנתונים אחרי שליחה
    localStorage.removeItem('reviewFormData');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photoUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // עדכון שדה ספציפי
  const updateField = <T extends keyof ReviewFormData>(field: T, value: ReviewFormData[T]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    handleSubmit,
    handleImageUpload,
    updateField,
  };
};
