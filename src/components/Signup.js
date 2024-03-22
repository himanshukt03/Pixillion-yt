import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/Signup", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/", { state: { id: email } })
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }

 return (
   <div
     style={{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       justifyContent: "center",
       height: "100vh",
       backgroundColor: "#0f0f0f",
     }}
   >
     <h1 className="login-heading">Signup</h1>

     <form
       style={{
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         padding: "40px",
         backgroundColor: "#1a1a1a",
         borderRadius: "10px",
         maxWidth: "400px",
         width: "100%",
       }}
       action="POST"
       onSubmit={submit}
     >
       <input
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Email"
         style={{
           padding: "12px",
           margin: "10px 0",
           borderRadius: "5px",
           border: "none",
           backgroundColor: "#2a2a2a",
           color: "#7d13ff",
           width: "100%",
           fontSize: "16px",
         }}
       />
       <input
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Password"
         style={{
           padding: "12px",
           margin: "10px 0",
           borderRadius: "5px",
           border: "none",
           backgroundColor: "#2a2a2a",
           color: "#7d13ff",
           width: "100%",
           fontSize: "16px",
         }}
       />
       <button
         type="submit"
         style={{
           padding: "12px 24px",
           margin: "10px 0",
           borderRadius: "5px",
           border: "none",
           backgroundColor: "#7d13ff",
           color: "#ffffff",
           fontWeight: "bold",
           cursor: "pointer",
           transition: "background-color 0.3s ease",
         }}
         onMouseEnter={(e) => {
           e.target.style.backgroundColor = "#6a00ff";
         }}
         onMouseLeave={(e) => {
           e.target.style.backgroundColor = "#7d13ff";
         }}
       >
         Signup
       </button>
     </form>

     <p style={{ color: "#7d13ff", margin: "20px 0" }}>OR</p>

     <Link
       to="/Login"
       style={{
         color: "#7d13ff",
         textDecoration: "none",
         fontWeight: "bold",
         transition: "color 0.3s ease",
       }}
       onMouseEnter={(e) => {
         e.target.style.color = "#6a00ff";
       }}
       onMouseLeave={(e) => {
         e.target.style.color = "#7d13ff";
       }}
     >
       Login Page
     </Link>
   </div>
 );
}

export default Login