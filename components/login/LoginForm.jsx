"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const router = useRouter();
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);

  const onSubmit = async (data) => {
    // setisPending(true);

    // signInWithEmailAndPassword(auth, data.email, data.password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user.displayName);
    //     router.push("/dashboard");
    //     setisPending(false);
    //   })
    //   .catch((error) => {
    //     setisPending(false);
    //     const errorCode = error.code;
    //     errorCode === "auth/wrong-password" ||
    //       ("auth/user-not-found" && setError("Invalid Email or Password"));
    //   });

    signIn('credentials', {email: data.email, password: data.password, redirect: true, callbackUrl: '/dashboard'})
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white w-[95%] mo-sm:w-[85%] mo-md:w-[75%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[25%] flex flex-col items-center rounded-lg px-5 py-9"
    >
      <Image
        src="/assets/logo.svg"
        alt="Company logo"
        className="mb-7"
        width={60}
        height={61 / 2}
      />

      <h1 className="text-[25px] font-semibold">Sign in</h1>

      {error && (
        <div className="bg-red bg-opacity-5 text-center mt-4 w-full p-1 rounded-[4px] font-semibold border border-red text-red">
          {error}
        </div>
      )}

      <div className="w-full mt-6 mb-11">
        <div className="form_field">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            className={`${
              errors.email
                ? "border-red focus:border-red"
                : "border-darkGray focus:border-primary-color"
            }`}
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
            name="password"
            className={`${errors.email ? "border-red" : "border-darkGray"}`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <input
          disabled={isPending}
          type="submit"
          value={!isPending ? "Sign in" : "Signing in..."}
          className={`bg-primary-color text-white cursor-pointer transition-all ease-linear duration-200 hover:opacity-90 font-semibold text-center w-full block rounded-[4px] p-2 mt-10 ${
            isPending ? "bg-opacity-70" : ""
          }`}
        />
      </div> 
    </form>
  );
};

export default LoginForm;
