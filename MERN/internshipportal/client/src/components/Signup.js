
import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

      export default function Signup() {
        const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: ''
        });
        const [error, setError] = useState('');
        const navigate = useNavigate()

        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };

        const handleSubmit = (e) => {
          e.preventDefault();
          axios.post("http://localhost:4000/auth/signup", formData).then((result)=>{
            if(result.data.status){
              navigate("/login")
            } else {
              setError(result.data.error)
            }
          })
        };

        return (
          <div>
            <h1>Signup page : </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <p>{error}</p>
          </div>
        );
      }
   