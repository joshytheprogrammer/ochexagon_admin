"use client";

import Image from "next/image";
import profilePicEmpty from "@public/assets/person-icon.svg";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "@utils/firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Modal from "react-modal";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const TestimonialsEditComponent = ({ testimonialsData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, isSubmitting, isSubmitted, isDirty },
  } = useForm();

  const watchedValues = watch();

  const requiredMsg = "This Field is required";

  const router = useRouter();

  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [closeQuery, setCloseQuery] = useState(false);

  const redirect = () => {
    router.push("/testimonials");
    router.refresh();
  };

  const deleteTestimonial = async () => {
    redirect();
    await deleteDoc(doc(firestore, "testimonials", testimonialsData.id));
  };

  const closeEdit = async () => {
    if (isDirty) {
      setCloseQuery(true);
    } else {
      redirect();
    }
  };

  const onSubmit = async (data) => {
    try {
      const currentDate = new Date();
      console.log(data.id);

      const testimonialsRef = doc(
        firestore,
        "testimonials",
        testimonialsData.id
      );

      const modifiedData = {
        name: data.name,
        testimony: data.testimony,
        location: data.location,
        lastModified: currentDate,
      };

      const profileImageRef = ref(
        storage,
        `testimonialProfileImages/${data.profileImage[0].name}`
      );
      await uploadBytes(profileImageRef, data.profileImage[0]);
      const profileImageUrl = await getDownloadURL(profileImageRef);
      modifiedData.profileImage = profileImageUrl;

      await updateDoc(testimonialsRef, modifiedData);
      console.log(
        "Blog posts updated successfully and saved to Firestore:",
        modifiedData
      );
    } catch (error) {
      console.error("Error updating blog post and saving to Firestore:", error);
    }
  };

  return (
    <>
      <div
        className="w-fit float-right mb-4 text-primary-color flex items-center justify-center text-[28px] cursor-pointer"
        onClick={closeEdit}
      >
        <IoMdClose />
      </div>
      <div className="h-full w-full flex flex-row md:items-center justify-center lg:justify-between overflow-auto scrollable-content">
        {testimonialsData && (
          <form
            action=""
            className="w-full h-full pr-2 md:w-[95%] lg:w-[40%] overflow-none"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="input-container">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                defaultValue={testimonialsData.data.name}
                {...register("name", { required: requiredMsg })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Profile Image</label>
              <input
                type="file"
                accept="image*"
                {...register("profileImage", { required: requiredMsg })}
              />
            </div>
            <div className="input-container">
              <label htmlFor="">Location</label>
              <input
                type="text"
                defaultValue={testimonialsData.data.location}
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
                defaultValue={testimonialsData.data.testimony}
                {...register("testimony", { required: requiredMsg })}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <div
                className="text-white flex items-center justify-center cursor-pointer bg-red text-lg rounded-md mr-4 px-3 py-1"
                onClick={() => setDeleteIsOpen(true)}
              >
                <FaTrashAlt />
              </div>
              <input
                type="submit"
                value="Save"
                disabled={!isValid}
                className={`text-white cursor-pointer bg-primary-color py-2 px-6 rounded-md text-lg disabled:bg-opacity-50 ${
                  isSubmitting ? "bg-opacity-50" : ""
                }`}
              />
            </div>
          </form>
        )}
        <div className="w-[48%] p-6 xl:p-8 border-2 mb-8 lg:mb-4 drop-shadow-2xl rounded-2xl relative text-left h-fit hidden lg:block">
          {watchedValues.profileImage && (
            <Image
              src={
                watchedValues.profileImage[0]
                  ? URL.createObjectURL(watchedValues.profileImage[0])
                  : profilePicEmpty
              }
              alt="Profile Picture"
              width={60}
              height={60}
              className="absolute w-[60px] aspect-square -top-[24px] -left-[30px] border-2 rounded-full block bg-darkGray"
            />
          )}
          <p className="max-w-full lg:text-md xl:text-lg break-words">
            {watchedValues.testimony ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi ullam aspernatur! Officiis aliquid suscipit quibusdam unde quas doloremque vel voluptates quasi similique eius, voluptatum, hic ea. Distinctio, sed neque optio tempora odit laudantium a ad sit nostrum repudiandae! Ipsum?"}
          </p>
          <h3 className="text-xl font-bold mt-4">
            {watchedValues.name || "Jane Doe"}
          </h3>
          <span className="font-semibold">
            {watchedValues.location || "Lagos, Nigeria"}
          </span>
        </div>
        <Modal
          isOpen={isSubmitted}
          className="bg-white w-[30%] rounded-lg"
          overlayClassName="bg-primary-color bg-opacity-20 flex justify-center items-center absolute top-0 bottom-0 right-0 left-0"
        >
          <div className="px-4 py-6">
            <div className="mb-12">
              <h2 className="font-bold text-lg">Testimonial Created!</h2>
              <p>Your New Testimonial has been added to the database.</p>
            </div>
            <button
              type="button"
              className="bg-primary-color text-white px-4 py-2 rounded-lg"
              onClick={redirect}
            >
              View all Testimonials
            </button>
          </div>
        </Modal>
        <Modal
          isOpen={deleteIsOpen}
          className="bg-white w-[80%] mo-lg:w-[60%] md:w-[50%] lg:w-[30%] rounded-lg"
          overlayClassName="bg-primary-color bg-opacity-20 flex justify-center items-center absolute top-0 bottom-0 right-0 left-0"
        >
          <div className="px-4 py-6">
            <div className="mb-12">
              <h2 className="font-bold text-lg">
                Are you sure you want to delete?
              </h2>
              <p>Your Blog will be deleted from the database</p>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-primary-color text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => setDeleteIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-red text-white px-4 py-2 rounded-lg"
                onClick={deleteTestimonial}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={closeQuery}
          className="bg-white w-[80%] mo-lg:w-[60%] md:w-[50%] lg:w-[30%] rounded-lg"
          overlayClassName="bg-primary-color bg-opacity-20 flex justify-center items-center absolute top-0 bottom-0 right-0 left-0"
        >
          <div className="px-4 py-6">
            <div className="mb-12">
              <h2 className="font-bold text-lg">
                Do you want to stop editing?
              </h2>
              <p>Your changes will not be saved</p>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red text-white px-4 py-2 rounded-lg mr-2"
                onClick={redirect}
              >
                Close
              </button>
              <button
                className="bg-primary-color text-white px-4 py-2 rounded-lg"
                onClick={() => setCloseQuery(false)}
              >
                Continue Editing
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default TestimonialsEditComponent;
