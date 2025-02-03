import AnimatedPage from "../components/AnimatedPage";
import AuthForm from "../components/AuthForm";
import { useState } from "react";

const LoginPage = () => {
  // State to manage the current mode ("login" or "register")
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <AnimatedPage>
      <div className="flex items-center justify-center min-h-screen">
        {/* Passed both `mode` and `setMode` as props to AuthForm */}
        <AuthForm mode={mode} setMode={setMode} />
      </div>
    </AnimatedPage>
  );
};

export default LoginPage;
