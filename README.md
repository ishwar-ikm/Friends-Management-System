# Friends Management System

The Friends Management System is a web application that allows users to manage a list of friends. Users can add new friends, update existing friend details, delete friends, and view a list of all friends.

## Technologies Used

- **Backend:**
  - Flask - Python web framework for building APIs
  - SQLAlchemy - ORM (Object-Relational Mapping) library for database interaction
  - Flask-CORS - Extension for handling Cross-Origin Resource Sharing
  - SQLite - Lightweight relational database for storing friend records

- **Frontend:**
  - React - JavaScript library for building user interfaces
  - Chakra UI - Modular component library for React applications

## Backend Setup

1. **cd over to the backend folder:**
   ```bash
   cd backend
   ```

2. **Install Python Dependencies:**
   ```bash
   pip install Flask Flask-SQLAlchemy flask-cors
   ```

3. **Run the Backend Server:**
   ```bash
   python app.py
   ```
   This command starts the Flask development server at `http://localhost:5000`.

## Frontend Setup

1. **cd over to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install Node.js Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Frontend Development Server:**
   ```bash
   npm run dev
   ```
   This command starts the React development server at `http://localhost:5173`.

## API Endpoints

### Get All Friends

- **URL:** `/api/friends`
- **Method:** `GET`
- **Description:** Retrieves a list of all friends stored in the database.

### Create a Friend

- **URL:** `/api/friends`
- **Method:** `POST`
- **Description:** Adds a new friend to the database. Requires `name`, `role`, `description`, and `gender` fields in the request body.

### Update a Friend

- **URL:** `/api/friends/<id>`
- **Method:** `PATCH`
- **Description:** Updates an existing friend's details in the database based on the specified `id`. Allows modification of `name`, `role`, `description`, and `gender` fields.

### Delete a Friend

- **URL:** `/api/friends/<id>`
- **Method:** `DELETE`
- **Description:** Deletes a friend from the database based on the specified `id`.

## Frontend Components

### Navbar Component

- **Location:** `src/Components/Navbar.js`
- **Description:** Provides navigation options and a theme toggle button.

### UserGrid Component

- **Location:** `src/Components/UserGrid.js`
- **Description:** Displays a grid of user profiles fetched from the backend API. Utilizes Chakra UI for layout and styling.

### CreateUserModel Component

- **Location:** `src/Components/CreateUserModel.js`
- **Description:** Modal component for adding a new friend. Includes form fields for `name`, `role`, `description`, and `gender`.

### EditModal Component

- **Location:** `src/Components/EditModal.js`
- **Description:** Modal component for editing an existing friend's details. Pre-populates fields with current data and allows updates.

### UserCard Component

- **Location:** `src/Components/UserCard.js`
- **Description:** Card component displaying individual user profiles. Includes options to edit or delete each friend.

## Environment Variables

- **BASE_URL:** Base URL for making API requests (`http://localhost:5000/api`).

## Notes

- Ensure both backend and frontend servers are running concurrently for the application to function properly.
- Customize styling and additional features based on project requirements.

## Screenshots
### Home Page
![Alt text](/screenshot/home.png)
### Add friend page
![Alt text](/screenshot/add-friend.png)
### Edit friend page
![Alt text](/screenshot/edit-friend.png)
