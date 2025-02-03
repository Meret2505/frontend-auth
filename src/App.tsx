import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/ThemeProvider";
import { getToken } from "./hooks/useAuth";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const isAuthenticated = !!getToken();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <div className="absolute top-4 right-14 ">
            <ModeToggle />
          </div>
          <Routes>
            {/* Redirect to Profile if authenticated */}
            <Route
              path="/"
              element={isAuthenticated ? <ProfilePage /> : <LoginPage />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
