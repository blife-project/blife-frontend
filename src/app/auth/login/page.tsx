import Hero from "@/component/modules/auth/common/Hero";
import Form from "@/component/modules/auth/login/Form";

const index = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 w-[300px]">
      <Hero />
      <Form />
    </section>
  );
};

export default index;
