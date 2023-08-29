"use client";

import Image from "next/image";
import profilePicEmpty from "@public/assets/person-icon.svg";
import { useForm } from "react-hook-form";

const TestimonialsEditComponent = () => {
  const { register, watch } = useForm();

  const watchedValues = watch();

  const requiredMsg = "This Field is required";

  return (
    <div className="h-full w-full flex flex-row md:items-center justify-center lg:justify-between overflow-hidden">
      <form action="" className="w-full h-full pr-2 md:w-[95%] lg:w-[40%] overflow-none scrollable-content">
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

        <div className="input-container mb-12">
          <label htmlFor="" className="font-bold">
            Caption
          </label>
          <textarea
            className="h-[200px]"
            {...register("caption", { required: requiredMsg })}
          ></textarea>
        </div>

        <input type="submit" value="Save" className="w-full text-white bg-primary-color py-2 px-6 rounded-md text-lg" />
      </form>

      <div className="p-6 xl:p-8 border-2 mb-8 lg:mb-4 drop-shadow-2xl rounded-2xl w-[48%] relative text-left h-fit hidden lg:block">
        {watchedValues.profileImg && <Image
          src={watchedValues.profileImg[0] ? URL.createObjectURL(watchedValues.profileImg[0]) : profilePicEmpty}
          alt="Profile Picture"
          width={60}
          height={60}
          className="absolute w-[60px] aspect-square -top-[24px] -left-[30px] border-2 rounded-full block bg-darkGray"
        />}

        <p className="max-w-full lg:text-md xl:text-lg break-words">
          {watchedValues.caption || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi ullam aspernatur! Officiis aliquid suscipit quibusdam unde quas doloremque vel voluptates quasi similique eius, voluptatum, hic ea. Distinctio, sed neque optio tempora odit laudantium a ad sit nostrum repudiandae! Ipsum?"}
        </p>

        <h3 className="text-xl font-bold mt-4">{watchedValues.name || "Jane Doe"}</h3>
        <span className="font-semibold">{watchedValues.location || "Lagos, Nigeria"}</span>
      </div>
    </div>
  );
};

export default TestimonialsEditComponent;