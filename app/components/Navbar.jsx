import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutBtn from "./LogoutBtn";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";


const Navbar = async () => {
  const session = await getServerSession(authOptions)
  const showImage = (user) => {
    if(user){
        return user.image
    }
    else{
      return "/profileImg.jpg"
    }
  }


  return (
    <nav className="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-between bg-green-400 py-4 px-3 ">
      <div className="font-bold text-xl uppercase mb-4"><Link href="/">Notes App</Link></div>
      <div className="flex flex-col items-center justify-center sm:flex-row gap-4 hover">
        <Link href="/" >Home</Link>
        {session?.user && <Link href="/add-note">Add Note</Link>}
        
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        
        {session?.user ? (        <div className="navdp">
           <Image src={showImage(session?.user)} height={40} width={40} alt="user"/>

          <ul className="profile-drop">
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <LogoutBtn/>
            </li>
          </ul>

        </div>): (<Link href="/login">Login</Link>)
        
        }

      </div>
    </nav>
  );
};

export default Navbar;
