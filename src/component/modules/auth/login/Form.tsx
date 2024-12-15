"use client";

import InputText from "@/component/shared/form/InputText";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField";
import { Lock, User } from "@/lib/icons";
import Link from "next/link";

const Form = () => {
  const { register } = useForm<ILoginPayload>();

  return (
    <form className="flex flex-col gap-4 w-full">
      <InputField
        icon={User}
        input={
          <InputText
            field="username"
            register={register}
            placeHolder="Username"
          />
        }
      />
      <InputField
        icon={Lock}
        input={
          <InputText
            field="password"
            register={register}
            placeHolder="Password"
          />
        }
      />
      <button type="submit" className="button-solid py-3 rounded-lg">
        Login
      </button>
      <p className="text-center text-sm">
        {"Don't have account? "}
        <Link href={"/auth/register"} className="underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Form;
