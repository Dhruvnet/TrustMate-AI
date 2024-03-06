import React from 'react'
import { RiChatVoiceFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className='p-5 w-full flex flex-row gap-2 lg:hidden md:hidden '>
      <div className='flex flex-row justify-center items-center'>

        {/* <RiChatVoiceFill className='h-10 text-4xl' /> */}
        <img src={logo} alt="TrustMate" className='w-48 object-contain' />
      </div>
      <a href="https://github.com/Dhruvnet/TrustMate-AI" className='ml-auto text-3xl flex justify-end items-center' target='_blank' rel='noreferrer'>

        <FaGithubSquare />
      </a>
    </div>
  )
}

export default Navbar