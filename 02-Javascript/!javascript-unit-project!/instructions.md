You have to create a user-management website.
Your local database for the website - the localStorage (using window.localStorage)
On the menu:
1) One tab opens a form for user creation.
The relevant user details:
username, email, phone, firstName, lastName, street, city, state, country, zipcode, registeredDate, updatedDate
You have to do validations on the form inputsv
On the form submit / button click - you have to create a user object, contains all these relevant field
If the username and email has not being used before - the user is created (stored in the local database)
You'll have to learn use the JSON.stringify(object) to convert the object to a string representation for storing the data in the db
and use JSON.parse(<string-object>) - for converting the string object to a javascript object.
the key of each user should be the userId
Recommended - manage another key in the localStorage that stores all the userIds
2) Second tab - for a users view - a table contains all the existing created users and their full data
Above the table - you'll need to implement filters section:
1) username filter
2) email filter
3) phone filter
4) full name filter
5) country filter
6) city filter
7) registeredDate filter
8) updatedDate filter

Requirements:
a) The filters should perform AND operations between them (if i choose country = 'Cuba' and full name = 'Aviran')
b) The filters should not be case-sensitive (writing "Aviran" and "aviran" should present the same results)
c) The behaviour of the filters should perform the filtering for every typing / selecting in the filters, with a small debounce (waiting for 200-300ms suspence in the user input writing)

In addition for the users-view page:
a) Every user row should have an edit & delete buttons (with icons), pressing on the edit button - will create in the user row the relevant inputs, each of them filled with the user data - and you can edit them & save - then the user should be saved in the db, note that the field "updatedDate" of the user should be updated as well according to this edit time.
The delete button should popup a confirmation popup for the user deletion, when the user click "ok" there - the user is deleted from the db, and immediately deleted from the table for a good user experience.
b) As long the users-view table is not in edit-mode: the table should refresh itself from the database every 30 seconds
(to test it - open a new tab with your application - in one chrome tab you should create a user, and in the second chrome tab watch the users-view table being updated after up to 30s with the new user).

You are invited to expand your project more as you wish.

[Bonus points] - implement "Undo" button with a moving bar for a user deletion (after confirming the deletion, the user is deleted but there's a moving bar for 6 seconds with "Undo" text, when the user press the "Undo" button - the user is coming back and not being deleted)