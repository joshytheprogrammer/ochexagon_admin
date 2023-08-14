"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white w-[60%] flex flex-col items-center rounded-lg px-5 py-9"
    >
      <Image
        src="/assets/logo.svg"
        alt="Company logo"
        className="mb-7"
        width={60}
        height={61 / 2}
      />

      <h1 className="text-[25px] font-semibold">Sign in</h1>

      <div className="w-full mt-6 mb-11">
        <div className="form_field">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="form_field">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
        </div>

        <input
          type="submit"
          value="Sign in"
          className="bg-primary-color text-white font-semibold w-full rounded-[4px] p-2 mt-8"
        />
      </div>
    </form>
  );
};

export default LoginForm;
