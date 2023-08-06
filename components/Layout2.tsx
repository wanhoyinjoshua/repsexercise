import React from "react";
import { useRouter } from "next/router"
import Modal from "../components/Modal"
import Image from 'next/image'
import HeaderNav from "./HeaderNav";
const Header = () => {
  return (
  <div className="mt-2">

<Image
      src="/icon-512x512.png"
      alt="My Image"
      width={100}
      height={100}
    />

    


  </div>)
};
  
const Footer = () => {
  return <h3>This is Footer</h3>;
};
  
const Layout2 = ({ children }) => {
    const router = useRouter()
  return (
    <div className="mx-auto max-w-full  ">
      <HeaderNav/>
      
      {children}

    
      
     
    
      </div>
  );
};
  
export default Layout2;