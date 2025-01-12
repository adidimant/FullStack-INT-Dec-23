-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VisitedPlace" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "visitDate" DATETIME NOT NULL,
    "notes" TEXT,
    "userId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    CONSTRAINT "VisitedPlace_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VisitedPlace_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favorite_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Note_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");


/* הקובץ מגדיר את מבנה בסיס הנתונים, כולל טבלאות, עמודות, קשרים ואינדקסים, המאפשרים ניהול משתמשים, מדינות, ביקורות, מועדפים, ביקורים והערות בצורה מאורגנת.


טבלת User

מייצגת משתמשים במערכת.
עמודות עיקריות:
id: מזהה ייחודי (Primary Key).
email: כתובת דוא"ל ייחודית (מאובטחת עם אינדקס ייחודי).
password: סיסמה מוצפנת.
name: שם המשתמש.
avatar: קישור לתמונת פרופיל.
createdAt, updatedAt: תאריכים לניהול זמן יצירה ועדכון.
טבלת Country

מייצגת מדינות הזמינות במערכת.
עמודות עיקריות:
id: מזהה ייחודי (Primary Key).
name, capital: שם המדינה ובירתה.
description: תיאור המדינה.
imageUrl: קישור לתמונה.
currency, language, timezone: פרטים על המטבע, שפה ואזור זמן.
latitude, longitude: מיקום גיאוגרפי.
טבלת Review

מייצגת ביקורות על מדינות.
עמודות עיקריות:
id: מזהה ייחודי (Primary Key).
rating: דירוג (מספרי).
comment: תוכן הביקורת.
createdAt, updatedAt: זמן יצירה ועדכון.
userId, countryId: מזהי משתמש ומדינה (Foreign Keys).
טבלת VisitedPlace

מייצגת מקומות בהם המשתמש ביקר.
עמודות עיקריות:
id: מזהה ייחודי (Primary Key).
visitDate: תאריך הביקור.
notes: הערות.
userId, countryId: מזהי משתמש ומדינה (Foreign Keys).
טבלת Favorite

מייצגת מדינות מועדפות על המשתמש.
עמודות עיקריות:
id: מזהה ייחודי (Primary Key).
createdAt: זמן יצירת המועדפות.
userId, countryId: מזהי משתמש ומדינה (Foreign Keys).
טבלת Note

מייצגת הערות משתמשים על מדינות.
עמודות עיקריות:
id: מזהה ייחודי (Primary Key).
title, content: כותרת ותוכן ההערה.
createdAt, updatedAt: זמן יצירה ועדכון.
userId, countryId: מזהי משתמש ומדינה (Foreign Keys).
אינדקס ייחודי לטבלת User

מוודא שכתובת דוא"ל (email) תהיה ייחודית בכל המערכת.
*/



