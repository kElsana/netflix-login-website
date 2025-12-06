import { useState } from "react"
import NetflixImage from '../assets/image/netflix-bg-image1.jpg'
import NetflixLogo from '../assets/image/Logonetflix.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login(){
    const navigate = useNavigate()
    const [msg, setmsg] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [loading, setLoading] = useState(false);

    const handleEmail= function(evt){
        setEmail(evt.target.value)
    }

    const handlePass= function(evt){
        setPass(evt.target.value)
    }

    const handleSubmit=function(evt){
        if (evt && evt.preventDefault) evt.preventDefault();

         if (loading) return;

        setmsg("")

        if (email.trim() === "" && pass.trim() === "") {
        setmsg("Enter your email and password");
        return;
        }

        if (email.trim() === "") {
        setmsg("Enter your email");
        return;
       }

       if (pass.trim() === "") {
        setmsg("Enter your password");
        return;
       }

        setLoading(true);

        const LoginDetails=axios.post("https://netflix-login-website.onrender.com/login",{"email":email,"password":pass})
        
        LoginDetails.then(({data})=>{
            if(data.success === true){
                setmsg("")
                navigate("/welcomepage")
                return
            }else{

                if(data.message === "email wrong"){
                    setmsg("Invalid Email Id")
                    return
                } 
                if(data.message === "password wrong"){
                    setmsg("Invalid Password")
                    return
                } 
                 setmsg(data.message || "Login failed");
 
            }
        })
        .catch((err)=>{
            console.error("axios error:", err)
            setmsg("Network or Server Error")
        })
        .finally(()=>{
            setLoading(false);
        })
        
    }

    return(
        <>
         <div className="relative w-full min-h-screen">

            <div className="fixed inset-0 w-full h-full">
                <img className="w-full h-full object-cover" src={NetflixImage} alt="" />
                <img className="absolute top-2 left-2 w-[35%] md:w-2xs" src={NetflixLogo} alt="" />
                </div>

            <div className="bg-black/75 rounded-md md:w-[30%] w-[80%] md:h-[600px] p-4 my-auto mx-auto mt-15 text-white absolute top-10 left-[10%] md:top-2 md:left-[35%] z-20">

            <div>
                <h1 className="font-bold text-3xl py-2 px-4">Sign In</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                    <input  onChange={handleEmail} name="email" type="text" value={email} placeholder="Email or mobile number" className="border w-[90%] md:m-4 m-2 p-2 rounded font-semibold focus:outline-none md:text-[16px]"/><br />

                    <input  onChange={handlePass} value={pass} name="password" type="password" placeholder="Password" className="border w-[90%] md:m-4  m-2 p-2 rounded font-semibold focus:outline-none md:text-[16px]" /><br />

                    <p className={`w-[90%] md:mx-4 mx-2 mt-2 p-2 rounded text-sm
                    ${msg ? 'block' : 'hidden'}`}
                    style={{ color: msg.toLowerCase().includes("wrong") || msg.toLowerCase().includes("enter") ? "#ffb4b4": "#bde0a8" }}>{msg}</p>

                    <button type="submit"   className="focus:outline-none bg-[#E50914] hover:bg-[#be0912] w-[90%] md:m-4 m-2 p-2 rounded font-semibold md:text-[18px]" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</button>
                </form>
                </div>
            </div>

            <div className="text-center">
                <h1 className="font-semibold">OR</h1>
                <button className="bg-white/20 hover:bg-white/10 text-white w-[90%] md:my-2 md:mx-4 my-1 mx-2 p-2 rounded font-bold focus:outline-none md:text-[16px] text-center">Use a sign-in code</button>
                <p className="underline hover:text-gray-300 font-semibold md:text-[16px]">Forgot Password?</p>
            </div>

            <div >
                <div className="flex items-center gap-2 py-2 px-4 md:text-[16px]">
                   <input type="checkbox" />
                   <p >Remember Me</p>
                </div>
                <p className="py-2 px-4 text-gray-300 font-semibold md:text-[16px]">New to Netflix?<b className="text-white px-1 hover:underline">Sign Up now.</b> </p>
                <p className=" px-4 text-[14px] text-gray-300">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                <p className="py-2 px-4 text-[14px] underline text-blue-600 font-semibold hover:text-blue-700">learn More.</p>
            </div>

            </div>

         </div>
        </>
    )
}

export default Login