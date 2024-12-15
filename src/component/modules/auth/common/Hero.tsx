import { BlifeLogo } from "@/lib/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
        <Image src={BlifeLogo} alt="logo" fill />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold">Welcome to Blife</h1>
        <p className="text-sm">Manage Everything on Your Life</p>
      </div>
    </div>
  );
};

export default Hero;
