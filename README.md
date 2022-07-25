# Rate and Review Modal App

This project is a simple rate and review modal developed with React and with TypeScript. For styling, sass is used, and application is full responsive
You can find live demo of the application in below link:


# Code Structure

Application consists of 3 components,
![image](https://user-images.githubusercontent.com/8982629/180784614-53f23476-7538-4f5b-9a11-87b5a8d5a408.png)
-Rate modal component
-Rate input component 
-Review component

# Running application
Application opens with modal, and asks user for rates
![image](https://user-images.githubusercontent.com/8982629/180784884-49f5cb2b-7535-48ec-b662-b3c952877b18.png)

After rating is done, review modal is opened
![image](https://user-images.githubusercontent.com/8982629/180784962-7c0121a2-2b43-4c37-b0ce-e416ecc4cad4.png)


If user closes the modal without submitting, the modal reopens when page is reloaded, if user submits and refreshes page, modal will not be opened and data will be saved in local storage, but you can click the button on the page and local storage will be removed and modal will be opened

![image](https://user-images.githubusercontent.com/8982629/180785325-cb24f30a-41d7-4443-8977-964ab86d39ee.png)

# For Tests

I added some unit tests for components and service methods
![image](https://user-images.githubusercontent.com/8982629/180785404-a3c152d2-2bf4-41ef-b70e-e3920312f11f.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.




