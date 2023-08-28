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
      <h1>{blogData.id}</h1>
      <form action="" className="scrollable-content overflow-auto h-full">
        <div>
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>

        <div className="w-fit">
          <label htmlFor="">Cover Image</label>

          <FileUploader />
        </div>

        <div>
          <label htmlFor="">Content</label>
          <ReactQuill theme="snow" />
        </div>

        <div>
          <button>Preview</button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditComponent;
