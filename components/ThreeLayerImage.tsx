import Image from "next/image";
import bg from "@/assets/contact-image.png";
import { ArrowRight } from "lucide-react";
import arow from "@/assets/up right.svg";

export default function ThreeLayerImage() {
  return (
    <div className="relative w-[416px] h-[508px] flex items-center justify-center">
      {/* BACK LAYER */}
      <div
        className="absolute w-[328px] ml-14 flex justify-center items-center h-[329px] bg-gray-600 clip-custom  rounded-t-[35px]"
        style={{ top: "10%", left: "5%" }}
      ></div>

      {/* MIDDLE LAYER */}
      <div
        className="absolute w-[374px] ml-8 content-center mt-12 h-[319px] bg-gray-400 clip-custom  rounded-t-[35px]"
        style={{ top: "5%", left: "7.5%" }}
      ></div>

      {/* FRONT LAYER with clipped image */}
      <div
        className="absolute w-[416px] mt-24 h-[307px] overflow-hidden clip-custom rounded-[35px]"
        style={{ top: "0%", left: "10%" }}
      >
        <Image
          src={bg}
          alt="Layered bg"
          layout="fill"
          objectFit="cover w-[416px] h-[307px]"
        />
      </div>

      {/* CIRCULAR BUTTON */}
      <button
        className="absolute -right-7 bottom-24
                   w-[114px] h-[114px] rounded-full bg-[#1D2939]
                   flex items-center justify-center
                   shadow-lg hover:scale-105 transition"
      >
        <Image src={arow} alt="" />
      </button>
    </div>
  );
}
