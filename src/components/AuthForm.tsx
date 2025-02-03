import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useState } from "react";
import { loginUser, registerUser, saveToken } from "../hooks/useAuth";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";

const AuthForm = ({
  mode,
  setMode,
}: {
  mode: "login" | "register";
  setMode: (mode: "login" | "register") => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (mode === "register" && password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const response =
        mode === "login"
          ? await loginUser(email, password)
          : await registerUser(email, password);
      saveToken(response.data.token);
      window.location.href = "/profile";
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-[350px] shadow-lg dark:bg-gray-800 dark:border-gray-700 ">
      <CardHeader>
        <CardTitle className="text-center text-xl font-bold text-primary dark:text-primary">
          {mode === "login" ? "Login" : "Register"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
          />
          {mode === "register" && (
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
            />
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full hover:bg-blue-600 dark:text-black dark:hover:text-white font-bold py-2 rounded-md transition duration-300"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : mode === "login" ? (
              "Login"
            ) : (
              "Register"
            )}
          </Button>
        </form>
        {/* Switch between Login and Register */}
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {mode === "register" ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-primary dark:text-primary hover:underline cursor-pointer"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setMode("register")}
                className="text-primary dark:text-primary hover:underline cursor-pointer"
              >
                Register
              </button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
