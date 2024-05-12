import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./../assets/styles/form.css";

const Register = () => {
  // react state
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputs.name.length === 0) {
      return toast.error("name is Required");
    }
    if (inputs.email.length === 0) {
      return toast.error("Email is Required");
    }
    if (inputs.password.length === 0) {
      return toast.error("Password is Required");
    }

    try {
      const { data } = await axios.post(
        "https://react-interview.1putym.easypanel.host/api/register",
        inputs
      );
      if (data.status) {
        toast.success("User Registration Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label htmlFor="username">name</label>
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              id="name"
              className="form-control mt-1"
              placeholder="enter your name"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              id="email"
              className="form-control mt-1"
              placeholder="enter your email"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={inputs.password}
              id="password"
              className="form-control mt-1"
              onChange={handleChange}
              placeholder="enter your  password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <p className="text-center mt-2">
              Already Register?<Link to="/login"> Please Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
