"use client";

import { firestore, storage } from "@utils/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useForm } from "react-hook-form";

const NewPostsComponent = () => {
  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const currentDate = new Date();

      const modifiedData = {
        ...data,
        title: data.title,
        content: data.content,
        dateCreated: currentDate,
      };

      const coverImageRef = ref(
        storage,
        `blogCoverImages/${data.coverImage[0].name}`
      );
      uploadBytes(coverImageRef, data.coverImage);
      const coverImageUrl = getDownloadURL(coverImageRef);
      modifiedData.coverImage = coverImageUrl;

      await addDoc(collection(firestore, "blog"), modifiedData);

      console.log(
        "Blog posts created successfully and saved to Firestore:",
        modifiedData
      );
    } catch (error) {
      console.error("Error creating blog post and saving to Firestore:", error);
    }
  };

  return (
    <div className="h-full">
      <form
        action=""
        className={`w-full h-full flex flex-col-reverse sm:flex-col pr-2 overflow-auto scrollable-content`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex justify-end mb-12">
          <input
            type="submit"
            value="Save"
            disabled={errors.title || errors.coverImage || errors.content}
            className="w-full sm:w-fit text-white bg-primary-color py-1 px-6 rounded-md text-lg cursor-pointer disabled:bg-opacity-50"
          />
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:mb-8">
            <div className="input-container w-full sm:w-[45%]">
              <label htmlFor="">Title</label>
              <input
                type="text"
                {...register("title", {
                  required: true,
                  minLength: 6,
                })}
              />
            </div>
            <div className="input-container w-full sm:w-[45%]">
              <label htmlFor="">Cover Image</label>
              <input
                type="file"
                accept="image/*"
                {...register("coverImage", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="input-container mb-12">
            <label htmlFor="" className="font-bold">
              Content
            </label>
            <textarea
              className="h-[200px] overflow-hidden min-h-[300px]"
              onInput={(e) => adjustTextareaHeight(e.target)}
              {...register("content", {
                required: true,
                minLength: 30,
              })}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPostsComponent;
