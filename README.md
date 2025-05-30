# TarotVerse Web Application

<<<<<<< HEAD
## Live Demo :- https://tarotcardapp.netlify.app/
=======
>>>>>>> afb3a47 (animation done)
## Features

- **User Authentication:**  
  Users can sign up and log in. Credentials are stored in localStorage for session persistence.

- **Personalized Dashboard:**  
  Greets users by name and allows them to draw a random Tarot card with its meaning displayed.

- **Tarot Module:**  
  Draw a card to reveal your tarot reading. See static images representing previous readings.

- **Responsive UI:**  
  Modern, responsive design using Tailwind CSS and custom fonts for an immersive experience.

- **Navigation:**  
  Includes a Navbar with a personalized greeting and logout button. Quick access to Tarot learning resources.

---

## Tech Stack Used

- **React.js** (Functional components, hooks)
- **React Router DOM** (Routing)
- **Tailwind CSS** (Styling)
- **Google Fonts** (Yusei Magic)
- **Vite** (Development/build tool)
- **localStorage** (Client-side persistence)

---

## Project Structure

- `src/components/` — Contains all main React components like [`Dashboard`](src/components/Dashboard.jsx), [`LandingPage`](src/components/LandingPage.jsx), [`Navbar`](src/components/Navbar.jsx), [`Signin`](src/components/Signin.jsx), and [`SignUp`](src/components/SignUp.jsx).
- `src/App.jsx` — Main app routing.
- `src/main.jsx` — Entry point.
- `src/index.css` — Global styles and Tailwind setup.

---

## Getting Started

1. Install dependencies:
   ```sh
   npm install
2. Start the development server:
    npm run dev
3. Open http://localhost:5173 in your browser.

## Data Flow
- On sign up or login, user data is stored in localStorage.
- The Dashboard and Navbar read the username from localStorage to personalize the experience.
- Tarot card data is managed in the Dashboard component state.
- Logout clears all user data from localStorage.
