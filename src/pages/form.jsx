import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("name???", name);
  console.log("email???", email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
