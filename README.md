🚀 Frontend Auth Task
A modern React + TypeScript frontend application with authentication (login/register), profile management, and dark mode support using shadcn/ui, TailwindCSS, and Vite.

📌 Features
Authentication :
Login and register functionality.
Password validation (e.g., weak password detection).
Token-based session management.
Profile Management :
Fetch and display user profile details (email, ID).
Logout functionality with token clearing.
Dark Mode :
Toggle between light, dark, and system themes.
Persistent theme preference using localStorage.
Modern UI :
Clean and responsive design powered by TailwindCSS and shadcn/ui.
Smooth animations with Framer Motion.
Error Handling :
Proper error messages for invalid inputs, expired tokens, and API failures.
🛠️ Tech Stack
Frontend :
React (with TypeScript)
Vite (build tool)
TailwindCSS (styling)
shadcn/ui (UI components)
Framer Motion (animations)
State Management :
React Hooks (useState, useEffect)
Custom ThemeProvider for theme management.
API Integration :
Axios for API calls (login, register, fetch profile).
Other Tools :
ESLint and Prettier for code quality.
Lucide React icons for UI elements.
🚀 Getting Started
Prerequisites
Node.js (v18 or higher recommended)
npm or Yarn
A backend server (if running locally, ensure the API endpoints are configured correctly).
Installation
Clone the Repository :

```
git clone https://github.com/your-username/frontend-auth-task.git
cd frontend-auth-task
```

Install Dependencies :

```
npm install
# or
yarn install
```

Set Up Environment Variables :
Create a .env file in the root directory and add your backend API URL:

```
VITE_API_URL=https://backend-ashen-seven-22.vercel.app
```

Run the Development Server :

```
npm run dev
# or
yarn dev
```

Build for Production :

```
npm run build
# or
yarn build
```

🌟 Usage
Authentication
Login :
Navigate to /login and enter your email and password.
Upon successful login, you’ll be redirected to the profile page.
Register :
Navigate to /register and provide your email, password, and confirm password.
After registration, you’ll be logged in automatically.
Profile Page
Displays the user's email and unique ID.
Includes a logout button to clear the session.
Dark Mode
Use the theme toggle dropdown in the top-right corner to switch between light, dark, and system themes.
📂 Project Structure

```
frontend-auth-task/
├── public/ # Static assets (e.g., favicon)
├── src/
│ ├── components/ # Reusable UI components (e.g., AuthForm, ProfileCard)
│ ├── hooks/ # Custom hooks (e.g., useAuth, useTheme)
│ ├── pages/ # Page-level components (e.g., LoginPage, ProfilePage)
│ ├── App.tsx # Main application component
│ ├── main.tsx # Entry point
│ └── index.css # Global styles
├── tailwind.config.js # TailwindCSS configuration
├── vite.config.ts # Vite configuration
└── README.md # This file
```

🧪 Testing
To test the app:

Run the development server:

```
npm run dev
```

Open the app in your browser (http://localhost:5173 by default).
Test the following scenarios:
Login with valid and invalid credentials.
Register with weak and strong passwords.
Toggle between light, dark, and system themes.
Log out and verify that the session is cleared.
🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch:

```
git checkout -b feature/your-feature-name
```

Commit your changes:

```
git commit -m "Add your commit message"
```

Push to the branch:

```
git push origin feature/your-feature-name
```

Open a pull request.
📜 License
This project is licensed under the MIT License .

🙏 Acknowledgments
shadcn/ui for the beautiful and accessible UI components.
TailwindCSS for utility-first styling.
Vite for the fast and modern build tool.
Lucide React for the sleek icons.
📞 Contact
For questions or feedback, feel free to reach out:

Email: jumayewmeret9@gmail.com
GitHub: @Meret2505
