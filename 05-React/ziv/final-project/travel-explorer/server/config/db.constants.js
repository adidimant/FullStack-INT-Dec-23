export const DB_CONNECTION_EVENTS = {
    CONNECTED: 'connected',
    ERROR: 'error',
    DISCONNECTED: 'disconnected',
    RECONNECTED: 'reconnected'
  };
  
  export const DB_OPTIONS = {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    retryWrites: true,
    w: 'majority'
  };

  /*
  הקובץ מגדיר קבועים עבור חיבור למסד הנתונים MongoDB.

קבועים:
DB_CONNECTION_EVENTS:

אובייקט שמכיל את שמות האירועים הקשורים לחיבור MongoDB:
CONNECTED: התחברות מוצלחת.
ERROR: שגיאת חיבור.
DISCONNECTED: ניתוק החיבור.
RECONNECTED: חיבור מחדש.
DB_OPTIONS:

אובייקט שמגדיר אפשרויות חיבור למסד הנתונים:
serverSelectionTimeoutMS: זמן המתנה מקסימלי לבחירת שרת (במילישניות).
socketTimeoutMS: זמן המתנה לפעולה על socket (במילישניות).
retryWrites: ניסיון לכתוב מחדש במקרה של כישלון.
w: 'majority': מבטיח כתיבה ברוב המקרים.
מטרות:
לרכז את הקבועים וההגדרות במקום אחד לניהול קל יותר.
לשפר קריאות ותחזוקה של הקוד על ידי שימוש בקבועים מוגדרים מראש במקום ערכים קשיחים.
*/