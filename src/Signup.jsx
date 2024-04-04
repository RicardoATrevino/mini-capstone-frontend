import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Name: <input value={name} onChange={(event) => setName(event.target.value)} />
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div className="mb-3">
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div className="mb-3">
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <div className="mb-3">
          Password confirmation: <input className="form-control" name="password_confirmation" type="password" />
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Signup
        </button>
      </form>
      {status ? <img src={`https://http.cat/${status}`} /> : null}
    </div>
  );
}
