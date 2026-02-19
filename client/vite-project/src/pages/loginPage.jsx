import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../componensts/common/Navbar";
import Footer from "../componensts/common/Footer";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
            const res = await axios.post("http://localhost:5000/api/auth/login",{
                email,
                password

            },
            {withCredentials:true})

           

            switch(res.data.role){
                case "Health Department":
                   navigate("/health-dashboard");
                    break;
                case "Education Department":
                    navigate( "/education-dashboard");
                    break;
                case "Deputy Commissioner":
                    navigate ("/deputy");
                    break;
                case "Rural Development (MNREGA)":
                    navigate ( "/mnrega-dashboard");
                    break;
                default:
                    navigate( "/dashboard");
            }
        }catch(err){
            alert("Login Failed");

        }
    };
    return (
        <div>
            <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-5 to-white-10 ">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
                
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
            <input type="email" placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="mt-6 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"/>
            <button onClick={handleLogin} className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">Login</button>
            </div>

        </div>
        <Footer/>
        </div>
    );



}

export default LoginPage