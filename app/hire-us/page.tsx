'use client'
import AppDevelopement from "@/components/AppDevelopement";
import Modal from "@/components/Modal";
import UIAndUX from "@/components/UIAndUX";
import WebDevelopement from "@/components/WebDevelopement";
import React,{useState} from "react";

const page = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      {/* <Navbar/> */}
      <UIAndUX setOpen={setOpen}/>
      <WebDevelopement setOpen={setOpen}/>
      <AppDevelopement setOpen={setOpen}/>
      <Modal open={open} setOpen={setOpen}/>
    </div>
  );
};

export default page;
