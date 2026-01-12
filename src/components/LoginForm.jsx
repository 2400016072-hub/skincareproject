import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users";

export default function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!foundUser) {
      alert("Username atau password salah ❌");
      return;
    }

    localStorage.setItem("user", JSON.stringify(foundUser));

    if (foundUser.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Username</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded-xl px-4 py-2"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl px-4 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-2 rounded-xl"
      >
        Login
      </button>
    </form>
  );
}
