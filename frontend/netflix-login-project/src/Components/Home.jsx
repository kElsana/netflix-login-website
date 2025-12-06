import { useState } from "react"
import NetflixImage from '../assets/image/netflix-bg-image1.jpg'
import NetflixLogo from '../assets/image/Logonetflix.png'
import { useNavigate } from "react-router-dom"

function Home(){
    const navigate=useNavigate()

    const signIn = function(){
        navigate('/in')
    }
    return(
        <>
           <div className="relative w-full min-h-screen text-white">
          
                      <div className="fixed inset-0 w-full h-full">
                          <img className="w-full h-full object-cover" src={NetflixImage} alt="" />
                      </div>
          
                      <div className="bg-black/65 absolute top-0 left-0 z-20 w-full h-full">
          
                          <img className=" absolute top-2 left-2 w-[35%] md:w-3xs" src={NetflixLogo} alt="" />
          
                          <div className="absolute top-0 right-2 flex items-center mx-2">
                              <button className="py-2 px-4 m-4 rounded text-white font-semibold md:text-[16px] bg-white/30 hover:bg-white/20">English</button>
                              <button onClick={signIn} className="py-2 px-4 mx-2 my-4 rounded text-white font-semibold md:text-[16px] bg-[#E50914] hover:bg-[#be0912]">Sign In</button>
                          </div>
                      
                          <div className="absolute top-28 left-0  text-center md:mx-[25%] my-20">
                              <h1 className="font-extrabold md:text-5xl text-4xl p-2 md:p-4 ">Unlimited movies, shows, and more</h1>
                              <p className="font-semibold text-[18px] p-4">Starts at ₹149. Cancel at any time.</p>
                              <p className="font-medium text-[16px] md:p-2">Ready to watch? Enter your email to create or restart your membership.</p>
                              <div className="flex items-center justify-center flex-wrap">
                              <input className="border w-[70%] md:m-4  m-2 p-2 rounded bg-white/20 font-semibold focus:outline-none md:text-[16px]" type="text" placeholder="Enter Your Email or Phone"/>
                              <button className="py-2 px-4 md:px-6 rounded text-white font-bold text-xl bg-[#E50914] hover:bg-[#be0912]">GET STARTED</button>
                              </div>
                          </div>
                      </div>
          
                   </div>
        </>
    )
}

export default Home