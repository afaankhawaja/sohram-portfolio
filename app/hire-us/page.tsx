"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";

type FormKey = "firstName" | "lastName" | "email" | "phone";

const fields: {
  id: FormKey;
  label: string;
  placeholder: string;
  type: string;
}[] = [
  { id: "firstName", label: "First Name", placeholder: "John", type: "text" },
  { id: "lastName", label: "Last Name", placeholder: "Doe", type: "text" },
  { id: "email", label: "Email", placeholder: "you@email.com", type: "email" },
  {
    id: "phone",
    label: "Phone Number",
    placeholder: "+012 3456 789",
    type: "tel",
  },
];
export default function HireUsPage() {
  const [service, setService] = useState("UI UX Design");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setOpen(true);
  };

  const SelectedIcon = () => (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_55514_1156)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.32398C0 5.56815 0.684819 3.88424 1.90381 2.64267C3.12279 1.40111 4.77609 0.703613 6.5 0.703613C8.22391 0.703613 9.87721 1.40111 11.0962 2.64267C12.3152 3.88424 13 5.56815 13 7.32398C13 9.07981 12.3152 10.7637 11.0962 12.0053C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0053C0.684819 10.7637 0 9.07981 0 7.32398H0ZM6.12907 10.1575L9.87133 5.3926L9.19533 4.84179L6.00427 8.90316L3.744 6.98502L3.18933 7.66295L6.12907 10.1584V10.1575Z"
          fill="#AA253D"
        />
      </g>
      <defs>
        <clipPath id="clip0_55514_1156">
          <rect
            width="13"
            height="13.2407"
            fill="white"
            transform="translate(0 0.703613)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  // SVG for the non-selected state
  const NonSelectedIcon = () => (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_55514_1160)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.32398C0 5.56815 0.684819 3.88424 1.90381 2.64268C3.12279 1.40111 4.77609 0.703613 6.5 0.703613C8.22391 0.703613 9.87721 1.40111 11.0962 2.64268C12.3152 3.88424 13 5.56815 13 7.32398C13 9.07982 12.3152 10.7637 11.0962 12.0053C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0053C0.684819 10.7637 0 9.07982 0 7.32398Z"
          fill="#E0E0E0"
        />
      </g>
      <defs>
        <clipPath id="clip0_55514_1160">
          <rect
            width="13"
            height="13.2407"
            fill="white"
            transform="translate(0 0.703613)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div className="min-h-fit bg-[#fafafb] flex flex-col items-center px-2 py-10 md:py-20">
      {/* Header */}
      <div className="flex items-center w-full max-w-[1196px] mb-[79px]  ">
        <button
          onClick={() => router.push("/")}
          className="mr-4 p-2 rounded-full hover:bg-gray-100 transition"
        >
          {/* Back arrow icon (SVG) */}
          <svg
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3335 28.3334L9.33032 30.3366L7.32715 28.3334L9.33032 26.3302L11.3335 28.3334ZM59.5001 51.0001C59.5001 51.7515 59.2016 52.4722 58.6703 53.0035C58.1389 53.5349 57.4183 53.8334 56.6668 53.8334C55.9154 53.8334 55.1947 53.5349 54.6633 53.0035C54.132 52.4722 53.8335 51.7515 53.8335 51.0001H59.5001ZM23.497 44.5032L9.33032 30.3366L13.3366 26.3302L27.5033 40.4969L23.497 44.5032ZM9.33032 26.3302L23.497 12.1636L27.5033 16.1699L13.3366 30.3366L9.33032 26.3302ZM11.3335 25.5001H39.6668V31.1667H11.3335V25.5001ZM59.5001 45.3334V51.0001H53.8335V45.3334H59.5001ZM39.6668 25.5001C44.9269 25.5001 49.9716 27.5897 53.6911 31.3091C57.4106 35.0286 59.5001 40.0733 59.5001 45.3334H53.8335C53.8335 41.5762 52.3409 37.9728 49.6842 35.3161C47.0274 32.6593 43.424 31.1667 39.6668 31.1667V25.5001Z"
              fill="#A1243B"
            />
          </svg>
        </button>
        <h1 className="text-xl md:text-[64px] font-medium md:text-center w-full">
          Get a quote <span className="text-[#AA253D]">from us.</span>
        </h1>
      </div>
      {/* Main Card */}
      <div className="w-full max-w-[1196px] bg-white p-[10px] rounded-[10px] shadow-xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Panel */}
        <div
          className="md:max-w-[491px] rounded-[10px] w-full relative flex flex-col justify-between min-h-[647px]"
          style={{
            background: "linear-gradient( #AA253D 0%, #171717 100%)",
          }}
        >
          <div className="p-[40px]">
            <h2 className="text-white text-[28px] font-semibold mb-[14px]">
              Contact Information
            </h2>
            <p className="text-[#C9C9C9] ">Say something to start chat!</p>
            <div className="flex items-center gap-[25px]  mt-[116px] mb-[50px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fillOpacity="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z"
                  fill="white"
                />
                <path
                  d="M12.9998 8.00024C15.1028 8.00024 15.9998 8.89724 15.9998 11.0002H17.9998C17.9998 7.77524 16.2248 6.00024 12.9998 6.00024V8.00024ZM16.4218 13.4432C16.2296 13.2686 15.9771 13.1754 15.7176 13.1835C15.4581 13.1915 15.2118 13.3001 15.0308 13.4862L12.6378 15.9472C12.0618 15.8372 10.9038 15.4762 9.71179 14.2872C8.51979 13.0942 8.15879 11.9332 8.05179 11.3612L10.5108 8.96724C10.6972 8.78637 10.8059 8.54006 10.814 8.28045C10.822 8.02083 10.7287 7.76828 10.5538 7.57624L6.85879 3.51324C6.68384 3.3206 6.44067 3.20374 6.18095 3.1875C5.92122 3.17125 5.66539 3.2569 5.46779 3.42624L3.29779 5.28724C3.1249 5.46075 3.02171 5.69169 3.00779 5.93624C2.99279 6.18624 2.70679 12.1082 7.29879 16.7022C11.3048 20.7072 16.3228 21.0002 17.7048 21.0002C17.9068 21.0002 18.0308 20.9942 18.0638 20.9922C18.3083 20.9786 18.5391 20.8749 18.7118 20.7012L20.5718 18.5302C20.7413 18.3328 20.8271 18.077 20.811 17.8173C20.795 17.5576 20.6783 17.3143 20.4858 17.1392L16.4218 13.4432Z"
                  fill="white"
                />
              </svg>

              <span className="text-[#FCFCFD] text-[16px] -leading-[1.5%]">
                +92 333 0542400
              </span>
            </div>
            <div className="flex items-center gap-[25px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="white"
                />
              </svg>

              <span className="text-[#FCFCFD] text-[16px] -leading-[1.5%]">
                contact@theapexui.com
              </span>
            </div>
          </div>

          <svg
            className="absolute right-0 bottom-0"
            width="208"
            height="209"
            viewBox="0 0 208 209"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="162.5" cy="160.5" r="134.5" fill="#171717" />
            <circle cx="69" cy="69" r="69" fill="#8E1B44" fillOpacity="0.4" />
          </svg>
        </div>
        {/* Right Panel (Form) */}

        <div className="flex-1 flex items-start justify-center p-6 sm:p-10">
          <form
            onSubmit={handleSubmit}
            className="w-full  max-md:space-y-5 md:grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-10 bg-white"
          >
            {/* Inputs */}
            {fields.map(({ id, label, placeholder, type }) => (
              <div key={id} className="flex flex-col">
                <label
                  htmlFor={id}
                  className={` ${
                    id === "firstName" || id === "email"
                      ? "text-[#8D8D8D]"
                      : "text-[#171717]"
                  } text-[12px] mb-1 max-md:text-[#171717]`}
                >
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  value={form[id]}
                  onChange={(e) => {
                    const key = e.target.name;
                    const value = e.target.value;
                    setForm((prevForm) => ({
                      ...prevForm,
                      [key]: value,
                    }));
                  }}
                  placeholder={placeholder}
                  className="border-b border-gray-300 bg-transparent px-1 py-2 text-[14px] focus:outline-none focus:border-[#AA253D]"
                />
              </div>
            ))}

            {/* Service Selector */}
            <div className="col-span-1 md:col-span-2 mt-4">
              <label className="block text-[#171717] leading-5  text-nowrap  text-[14px] font-semibold mb-2">
                Select Service To Get A Quote
              </label>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                {["UI UX Design", "Web Development", "App Development"].map(
                  (option) => (
                    <label
                      key={option}
                      onClick={() => setService(option)}
                      className={`flex items-center min-w-fit gap-[10px] cursor-pointer p-3 rounded-lg transition-all duration-200 ease-in-out ${
                        service === option
                          ? "text-[#AA253D]"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {service === option ? (
                        <SelectedIcon />
                      ) : (
                        <NonSelectedIcon />
                      )}
                      <span>{option}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-end mt-[200px] pb-[30px]">
              {" "}
              {/* Adjusted mt and kept pb */}
              <button
                onClick={() => setOpen(true)}
                className="rounded-[60px] bg-[#AA253D] text-white max-md:text-[14px] text-[26px] font-medium px-[48px] py-[15px] shadow-lg hover:bg-[#c30052] transition-all max-md:mx-auto"
              >
                Send Message / Email
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} message={service} form={form} />
    </div>
  );
}
