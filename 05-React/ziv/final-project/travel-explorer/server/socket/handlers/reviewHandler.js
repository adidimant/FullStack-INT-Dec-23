import { logger } from '../../utils/logger.js';

export const handleReviews = (io, socket) => {
  socket.on('new-review', (review) => {
    logger.debug('New review received:', review);
   // שידור לכל הלקוחות מלבד השולח
    socket.broadcast.emit('review-added', review);
  });

  socket.on('review-liked', (review) => {
    logger.debug('Review liked:', review);
    socket.broadcast.emit('review-updated', review);
  });
};

/*
הקובץ server/socket/handlers/reviewHandler.js אחראי על טיפול באירועים הקשורים לביקורות ב-Socket.IO. להלן הסבר מתומצת על כל חלק בקובץ:

ייבוא logger:

logger הוא אובייקט שמספק יכולת לוגים (רישום מידע) לצורך דיבוג ומעקב אחרי פעולות.
הפונקציה handleReviews:

הפונקציה מקבלת שני פרמטרים: io (אובייקט ה-Socket.IO) ו-socket (החיבור הספציפי של הלקוח).
הפונקציה מאזינה לאירועים שונים של Socket.IO ומבצעת פעולות בהתאם.
האזנה לאירוע new-review:

כשלקוח שולח ביקורת חדשה (באמצעות שליחת אירוע new-review), הפונקציה מקבלת את הביקורת ומבצעת לוג עם פרטי הביקורת.
לאחר מכן, הפונקציה משדרת את הביקורת לכל שאר הלקוחות (ללא הלקוח ששולח את הביקורת) באמצעות socket.broadcast.emit('review-added', review).
האזנה לאירוע review-liked:

כשלקוח לוחץ על "אהבתי" לביקורת (באמצעות שליחת אירוע review-liked), הפונקציה מקבלת את הביקורת המעודכנת ומבצעת לוג עם פרטי הביקורת.
לאחר מכן, הפונקציה משדרת את הביקורת המעודכנת לכל שאר הלקוחות (ללא הלקוח ששולח את הביקורת) באמצעות socket.broadcast.emit('review-updated', review).
סיכום:
הקובץ מטפל באירועים הקשורים לביקורות ב-Socket.IO, ומפיץ את הביקורות החדשות או המעודכנות לכל הלקוחות המחוברים בזמן אמת.
*/