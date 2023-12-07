import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../utils/firebase";

export function Login() {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredentials = await signInUser(email, password);

      if (userCredentials) {
        setFormFields({ email: "", password: "" });
        navigate("/private");
        console.log("You logged in!");
      }
    } catch (error) {
      console.log("Error signing in user", error);
    }
  };

  return (
    <div>
      <div>Login Test</div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="input-primary"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
