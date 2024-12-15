import Image from "next/image";

const InputField = ({ icon, input }: { icon: any; input: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 border-b border-black">
      <Image src={icon} alt="icon" width={16} height={16} />
      {input}
    </div>
  );
};

export default InputField;
