import { cn } from "@/lib/utils";
import { ErrorMessage } from "@/util/message";
import { UseFormRegister } from "react-hook-form";

const InputText = ({
  field,
  register,
  placeHolder,
  isRequired,
  className,
}: {
  field: string;
  register: UseFormRegister<any>;
  placeHolder?: string;
  isRequired?: boolean;
  className?: string;
}) => {
  return (
    <input
      type="text"
      {...register(field, {
        required: isRequired && ErrorMessage.REQUIRED,
      })}
      placeholder={placeHolder}
      className={cn("focus:outline-none", className && className)}
    />
  );
};

export default InputText;
