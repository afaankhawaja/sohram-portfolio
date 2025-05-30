'use client'
// import AppDevelopement from "@/components/AppDevelopement";
import Modal from "@/components/Modal";
import UIAndUX from "@/components/UIAndUX";
import WebDevelopement from "@/components/WebDevelopement";
import React,{useState} from "react";

const page = () => {
  const [open, setOpen] = useState(false)
  const [message,setMessage] =useState('')
  return (
    <div>
      {/* <Navbar/> */}
      <UIAndUX setOpen={setOpen} setMessage={setMessage} />
      <WebDevelopement setOpen={setOpen} setMessage={setMessage} />
      {/* <AppDevelopement setOpen={setOpen}/> */}
      <Modal open={open} setOpen={setOpen} message={message} />
    </div>
  );
};

export default page;
