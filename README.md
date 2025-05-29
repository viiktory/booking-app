# Booking App

## **Tech Stack**

### **Frontend:**

- **Create React App** - Bootstrapped React application

- **React Router** - For navigation and routing

- **Formik** - Form handling and validation

- **Ant Design** - UI components for a modern design

- **PropTypes** - Type checking for components

- **Axios** - HTTP requests for API interactions

### **State Management:**

- **Redux** - Centralized state management

- **Redux Thunk** - Async middleware for Redux

### **Backend & Environment Configuration:**

- **Json-server** - Mock backend for data persistence (for development only)

- **ENV** - Environment variables for configuration

- **Eslint** - Linting and code quality enforcement

## **Installation & Setup**

To run the project locally, follow these steps:

1. **Clone the repository:**

`git clone https://github.com/viiktory/booking-app.git
cd booking-app`

2. **Install dependencies:**

`npm install`

3. **Start the development server:**

In one terminal window, run:

`npm start
`
This will start the frontend application, which will be available
at http://localhost:3000.

4. **Run the mock backend:**

In a separate terminal window, run:

`npm run server`

This will start _json-server_, which will mock a backend API and be available
at http://localhost:3001.

Make sure the **db.json** file is in place in the root of the project (it should
already be there, but ensure it has the necessary data).

Now your app should be fully functional with the mock backend running!

## Features

1. [ ] Browse and filter hotels
2. [ ] View hotel details and reviews
3. [ ] Sign in for personalized experience
4. [ ] Booking functionality (in progress)
5. [ ] Light/Dark theme toggle
6. [ ] Responsive design

## Troubleshooting

If you encounter issues with the _json-server_ not starting correctly:

- Make sure that **db.json** exists in the root of the project.

- Ensure that no other processes are using port 3001 (you can change the port in
  the package.json script if necessary).

- Check for any missing dependencies or errors in the terminal logs.
