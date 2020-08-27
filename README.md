# BCA-VSAC-Capstone

This is meant to walk you through the things you'll have to change to make this project fully your own.

Firstly, you will need to provision a MongoDB Atlas database and use the connection string in place of ours
in the URI variable in the Connection.js file in the DB folder. We are using a .env to obscure the username
and password in the connection string.

Secondly, you will need to obtain a free license from Flatfile.io for the CSV importer. We have been using the
free tier of their service and have done nearly a thousand conversions without limitation. Once you have your 
license you can put it in place of ours in the license variable in the FlatfileCSVReader.js component.

For the Firebase authentication we can turn over the ownership of the authentication server to you directly
without you having to create one from scratch.

The ownership of this repository will be transferred to VSAC's github account.



Known and unresolved issue: Currently if a new user tries to sign up for an account with an email that 
already exists in the Firebase auth server, you will get a brief error message on screen and then the App will
crash. We've been unable to resolve this error.
