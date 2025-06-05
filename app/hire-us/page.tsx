// 'use client'
// // import AppDevelopement from "@/components/AppDevelopement";
// import Modal from "@/components/Modal";
// import UIAndUX from "@/components/UIAndUX";
// import WebDevelopement from "@/components/WebDevelopement";
// import React,{useState} from "react";

// const page = () => {
//   const [open, setOpen] = useState(false)
//   const [message,setMessage] =useState('')
//   return (
//     <div className="">
//       {/* <Navbar/> */}
//       <UIAndUX setOpen={setOpen} setMessage={setMessage} />
//       <WebDevelopement setOpen={setOpen} setMessage={setMessage} />
//       {/* <AppDevelopement setOpen={setOpen}/> */}
//       <Modal open={open} setOpen={setOpen} message={message} />
//     </div>
//   );
// };

// export default page;
"use client";
import AppDevelopement from "@/components/AppDevelopement";
import Modal from "@/components/Modal";
import UIAndUX from "@/components/UIAndUX";
import WebDevelopement from "@/components/WebDevelopement";
import React, { useState, useEffect } from "react";

const page = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      // Add class to body to prevent scrolling
      document.body.classList.add("modal-open");

      // Prevent viewport scaling on iOS
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute(
          "content",
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        );
      }
    } else {
      // Remove class when modal closes
      document.body.classList.remove("modal-open");

      // Restore normal viewport behavior
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute(
          "content",
          "width=device-width, initial-scale=1.0"
        );
      }
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  return (
    <div>
      <UIAndUX setOpen={setOpen} setMessage={setMessage} />
      <WebDevelopement setOpen={setOpen} setMessage={setMessage} />
      <AppDevelopement setOpen={setOpen} setMessage={setMessage}/>
      <Modal open={open} setOpen={setOpen} message={message} />
    </div>
  );
};

export default page;