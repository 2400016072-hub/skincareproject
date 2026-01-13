import { useEffect } from "react";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <LoginForm />
    </div>
  );
}
