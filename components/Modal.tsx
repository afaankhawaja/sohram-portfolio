'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import icon2 from "@/assets/cards/email.svg"
import icon1 from "@/assets/cards/whatsapp.svg"
import Image from 'next/image'

interface props {
  open: boolean;
  setOpen: (e: boolean) => void;
  message: string;
}
export default function Modal({ open, setOpen, message }: props) {
  return (
    <Dialog open={open} onClose={setOpen} className="fixed w-dvw h-dvh z-10 bg-black/70">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/80 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex  min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="absolute transform overflow-hidden min-w-full w-[100%] rounded-lg bottom-0 bg-black px-4 pt-5 pb-4 text-left shadow-xl transition-all duration-500 data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95">
            <div className="flex flex-col items-center w-full justify-center">
              <div className="h-[12px] bg-[#222222] rounded-[100px] mb-[32px] w-[140px]"></div>
              <div className="mx-auto flex  items-center justify-center text-white  text-[20px] leading-[100%] tracking-[0px] mb-[10px]">
                {message}
              </div>
              <div className="text-[#8B8B8B] mx-auto flex  items-center justify-center text-[17px] leading-[100%] tracking-[0px] mb-[22px]">
                Contact us about this service
              </div>

              <a
                href={`mailto:sohrammalik@gmail.com?${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-[#8E8D8D] h-[51px] max-md:w-[200px] w-[466px] rounded-[100px] mb-[17px] text-white hover:bg-[#AA253D] text-[20px] leading-[100%] tracking-[0px] flex justify-center items-center gap-x-[18px]">
                  <Image src={icon2} alt={""} />
                  <span>Email us</span>
                </button>
              </a>

              <a
                href="https://wa.me/923330542400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-[#8E8D8D] h-[51px] max-md:w-[200px] w-[466px] rounded-[100px] text-white hover:bg-[#AA253D]  text-[20px] leading-[100%] tracking-[0px] flex justify-center items-center gap-x-[18px] mb-[35px]">
                  <Image src={icon1} alt={""} />
                  <span>Whatsapp us</span>
                </button>
              </a>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mb-[46px] flex max-md:w-[200px] w-[466px] mx-auto justify-center h-[51px] rounded-[100px] text-[20px] leading-[100%] tracking-[0px] items-center text-white font-semibold shadow-xs  hover:bg-[#AA253D] hover:pl-[2px]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
