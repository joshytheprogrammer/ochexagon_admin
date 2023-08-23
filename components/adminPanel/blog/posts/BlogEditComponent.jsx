"use client";

import { useForm } from "react-hook-form";
// import Dropzone from "react-dropzone-uploader";
import ReactQuill from "react-quill";
// import "react-dropzone-uploader/dist/styles.css";
// import { BsUpload } from "react-icons/bs";
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
      <form action="" className="scrollable-content overflow-auto h-full">
        <div>
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>

        <div className="w-fit">
          <label htmlFor="">Cover Image</label>

          <FileUploader />

          {/* <Dropzone
            accept="image/*"
            multiple={false}
            inputContent={
              <div className="text-black flex flex-col items-center">
                <div>
                  <BsUpload className="text-[40px]" />
                </div>
                <div className="text-lg mt-1">
                  Drag a file here or click to upload
                </div>
              </div>
            }
            classNames={{
              dropzone: "dropzone-wrapper",
              preview: "p-0 w-full h-full",
              previewImage: "h-[80px] relative",
              previewButton: "hidden",
              inputLabelWithFiles: "hidden",
            }}
            previewComponent={({ meta, imageProps }) => (
              <div className="relative">
                <img {...imageProps} alt={meta.name} />
                <div className="absolute top-0 right-0 p-1 text-red-500">
                  <button type="button" onClick={meta.cancel}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          />

          <style>
            {`
              .dzu-preview {
                position: relative;
              }
              
              .dzu-previewButton {
                position: absolute !important;
                top: 0 !important;
                right: 0 !important;
                padding: 0.25rem !important;
              }
            `}
          </style> */}
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
