"use client";

// import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FileUploader from "@components/adminPanel/FileUploader/FileUploader";

const BlogEditComponent = ({ blogData }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => console.log(data);

  return (
    <div className="h-full">
      <form action="" className="w-full h-full pr-2 md:w-[95%] lg:w-[40%] overflow-auto scrollable-content">
        <div className="input-container">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>

        <div className="input-container">
          <label htmlFor="">Cover Image</label>
          <input type="file" accept="image/*" />
          {/* <FileUploader /> */}
        </div>

        <div className="input-container mb-12">
          <label htmlFor="">Content</label>
          <textarea className="h-[200px]"></textarea>
        </div>

        <input type="submit" value="Save" className="w-full text-white bg-primary-color py-2 px-6 rounded-md text-lg" />
      </form>
    </div>
  );
};

export default BlogEditComponent;
