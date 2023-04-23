import React from "react";
import { useRouter } from "next/router"
import Modal from "../components/Modal"

const Header = () => {
  return <h3>This is Header</h3>;
};
  
const Footer = () => {
  return <h3>This is Footer</h3>;
};
  
const Layout = ({ children }) => {
    const router = useRouter()
  return (
    <div className="mx-auto max-w-full  sm:max-w-[50%]">
      <Header />
      
      {children}

      <div className="w-full">
        <Modal></Modal>

        </div>
      <div className="flex justify-between">
      
    <button onClick={() => router.back()} className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Home</button>
    <button onClick={() =>  router.push('/')} className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Back</button>
      </div>
    
      </div>
  );
};
  
export default Layout;