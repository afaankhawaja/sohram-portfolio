"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import icon2 from "@/assets/cards/email.svg";
import icon1 from "@/assets/cards/whatsapp.svg";
import Image from "next/image";

interface props {
  open: boolean;
  setOpen: (e: boolean) => void;
  message: string;
}

export default function Modal({ open, setOpen, message }: props) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      // Prevent scrolling
      document.body.style.overflow = "hidden";

      // Cleanup function to restore original overflow
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
      />

      <div className="fixed flex flex-col-reverse inset-0 z-50  overflow-y-auto">
        <div className="flex bg-black items-end justify-center pb-5 px-4">
          <DialogPanel
            transition
            className="relative transform overflow-hidden min-w-dvw max-w-md w-[100%] rounded-lg  px-4 pt-5 pb-4 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex flex-col items-center w-full justify-center">
              <div className="h-[12px] bg-[#222222] rounded-[100px] mb-[32px] w-[140px]"></div>
              <div className="mx-auto max-md:text-center flex items-center justify-center text-white text-[20px] leading-[100%] tracking-[0px] mb-[10px]">
                {message}
              </div>
              <div className="text-[#8B8B8B] mx-auto flex items-center justify-center text-[17px] leading-[100%] tracking-[0px] mb-[22px]">
                Contact us about this service
              </div>

              <a
                href={`mailto:sohrammalik@gmail.com?${`subject=${`${message}`}&body=${`I am interested in ${message}`}`}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[466px]"
              >
                <button className="border border-[#8E8D8D] h-[51px] w-full rounded-[100px] mb-[17px] text-white hover:bg-[#AA253D] text-[20px] leading-[100%] tracking-[0px] flex justify-center items-center gap-x-[18px]">
                  <Image src={icon2} alt="" />
                  <span>Email us</span>
                </button>
              </a>

              <a
                href="https://wa.me/923330542400"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[466px]"
              >
                <button className="border border-[#8E8D8D] h-[51px] w-full rounded-[100px] text-white hover:bg-[#AA253D] text-[20px] leading-[100%] tracking-[0px] flex justify-center items-center gap-x-[18px] mb-[35px]">
                  <Image src={icon1} alt="" />
                  <span>Whatsapp us</span>
                </button>
              </a>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mb-[46px] flex w-full max-w-[466px] mx-auto justify-center h-[51px] rounded-[100px] text-[20px] leading-[100%] tracking-[0px] items-center text-white font-semibold shadow-xs hover:bg-[#AA253D] hover:pl-[2px]"
            >
              Cancel
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
