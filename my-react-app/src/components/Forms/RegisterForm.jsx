import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required!";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "not a valid email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "password must be atleast 6 charcaters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log(formData)
    handleReset(e) //  dont pass same event, use a function instead
    setSubmitted(true)
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData({ username: "", email: "", password: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && <p>{errors.username}</p>}
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">
        Submit
      </button>
      <button type="button" onClick={handleReset}>Reset</button> {/*type button important*/}
      {submitted && <p>✅ Registered successfully!</p>}
    </form>
    
  );
}

export default RegisterForm;
