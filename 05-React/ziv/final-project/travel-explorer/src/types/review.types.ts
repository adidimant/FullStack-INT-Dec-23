export interface Review {
  id: string; // מזהה ייחודי של הביקורת
  authorName: string; // שם המחבר
  isAnonymous: boolean; // האם הביקורת אנונימית
  state: string; // מדינה או מיקום
  content: string; // תוכן הביקורת
  rating: number; // דירוג (1-5)
  photoUrl: string; // כתובת תמונה
  likes: number; // מספר הלייקים
  likedBy: string[]; // מערך מזהים של משתמשים שעשו לייק
  createdAt: string; // תאריך יצירה
  countryId: string; // Add countryId property
}

export interface ReviewFormData {
  authorName: string; // שם המחבר
  isAnonymous: boolean; // האם הביקורת אנונימית
  state: string; // מדינה או מיקום
  content: string; // תוכן הביקורת
  rating: number; // דירוג (1-5)
  photoUrl: string; // כתובת תמונה
  countryId: string; // Add countryId property
}