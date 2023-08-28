"use client";

import Image from "next/image";
import womanPicture from "@public/assets/woman.jpg";
import { useForm } from "react-hook-form";

const TestimonialsEditComponent = () => {
  const { register, watch } = useForm();

  const watchedValues = watch();

  const requiredMsg = "This Field is required";

  return (
    <div className="h-full flex flex-row justify-between items-center">
      <form action="" className="w-[40%]">
        <div className="input-container">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Jane Doe"
            {...register("name", { required: requiredMsg })}
          />
        </div>

        <div className="input-container">
          <label htmlFor="">Profile Image</label>
          <input
            type="file"
            accept="image*"
            {...register("profileImg", { required: requiredMsg })}
          />
        </div>

        <div className="input-container">
          <label htmlFor="">Location</label>
          <input
            type="text"
            placeholder="Lagos, Nigeria"
            {...register("location", { required: requiredMsg })}
          />
        </div>

        <div className="input-container">
          <label htmlFor="" className="font-bold">
            Caption
          </label>
          <textarea
            className="h-[150px]"
            {...register("caption", { required: requiredMsg })}
          ></textarea>
        </div>
      </form>

      <div className="xl:p-8 xl:border-2 mb-8 lg:mb-4 drop-shadow-2xl rounded-2xl w-[48%] relative text-center xl:text-left h-fit">
        <Image
          src={watchedValues.profileImg && URL.createObjectURL(watchedValues.profileImg[0]) || womanPicture}
          alt="Profile Picture"
          width={60}
          height={60}
          className="absolute w-[60px] aspect-square -top-[24px] -left-[30px] border-2 rounded-full hidden xl:block"
        />

        <p className="max-w-full over lg:text-lg break-words">
          {watchedValues.caption || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi ullam aspernatur! Officiis aliquid suscipit quibusdam unde quas doloremque vel voluptates quasi similique eius, voluptatum, hic ea. Distinctio, sed neque optio tempora odit laudantium a ad sit nostrum repudiandae! Ipsum?"}
        </p>

        <h3 className="text-xl font-bold mt-4">{"Jane Doe" || watchedValues.name}</h3>
        <span className="font-semibold">{watchedValues.location || "Lagos, Nigeria"}</span>
      </div>
    </div>
  );
};

export default TestimonialsEditComponent;
