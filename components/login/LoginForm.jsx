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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Image
        src="/assets/logo.svg"
        alt="Company logo"
        width={109}
        height={61}
      />

      <h1>Sign in</h1>

      <div>
        <div>
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

        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
        </div>

        <input type="submit" value="Sign in" />
      </div>
    </form>
  );
};

export default LoginForm;
