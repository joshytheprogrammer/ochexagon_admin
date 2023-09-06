"use client";

import { firestore, storage } from "@utils/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const BlogEditComponent = ({ blogData }) => {
  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting, isSubmitted },
  } = useForm();

  const redirect = () => {
    router.push("/blog");
    router.refresh();
  };

  const onSubmit = async (data) => {
    try {
      const currentDate = new Date();
      console.log(data.id);

      const blogPostRef = doc(firestore, "blog", blogData.id);

      const modifiedData = {
        title: data.title,
        content: data.content,
        lastModified: currentDate,
      };

      const coverImageRef = ref(
        storage,
        `blogCoverImages/${data.coverImage[0].name}`
      );
      await uploadBytes(coverImageRef, data.coverImage[0]);
      const coverImageUrl = await getDownloadURL(coverImageRef);
      modifiedData.coverImage = coverImageUrl;

      await updateDoc(blogPostRef, modifiedData);
      console.log(
        "Blog posts updated successfully and saved to Firestore:",
        modifiedData
      );
    } catch (error) {
      console.error("Error updating blog post and saving to Firestore:", error);
    }
  };

  return (
    <div className="h-full">
      {blogData && (
        <form
          action=""
          className="w-full h-full flex flex-col-reverse sm:flex-col pr-2 overflow-auto scrollable-content"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex justify-end mb-12">
            <input
              type="submit"
              value={isSubmitting ? "Saving..." : "Save"}
              disabled={!isValid}
              className={`w-full sm:w-fit text-white bg-primary-color py-1 px-6 rounded-md text-lg cursor-pointer disabled:bg-opacity-50 ${
                isSubmitting ? "bg-opacity-50" : ""
              }`}
            />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:mb-8">
              <div className="input-container w-full sm:w-[45%]">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  defaultValue={blogData.data.title}
                  {...register("title", {
                    required: true,
                    minLength: 6,
                  })}
                />
              </div>
              <div className="input-container w-full sm:w-[45%]">
                <label htmlFor="">
                  Cover Image{" "}
                  <span className="text-primary-color">{`(Note: You need to insert a new Image)`}</span>
                </label>
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
                defaultValue={blogData.data.content}
                {...register("content", {
                  required: true,
                  minLength: 30,
                })}
              ></textarea>
            </div>
          </div>
        </form>
      )}

      <Modal
        isOpen={isSubmitted}
        className="bg-white w-[30%] rounded-lg"
        overlayClassName="bg-primary-color bg-opacity-20 flex justify-center items-center absolute top-0 bottom-0 right-0 left-0"
      >
        <div className="px-4 py-6">
          <div className="mb-12">
            <h2 className="font-bold text-lg">Blog Created!</h2>
            <p>Your New Blog as been added to the database.</p>
          </div>
          <button
            type="button"
            className="bg-primary-color text-white px-4 py-2 rounded-lg"
            onClick={redirect}
          >
            View all Blogs
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BlogEditComponent;
