"use client";

import { useState } from "react";
import { BsUpload } from "react-icons/bs";

const SingleFileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const clearPreview = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className={`flex justify-center items-center`}>
      <label
        htmlFor="fileInput"
        className={` h-[150px] border-dashed border-2 border-gray-300 p-4 rounded-md cursor-pointer flex items-center ${
          !selectedFile
            ? "hover:text-primary-color hover:border-primary-color"
            : ""
        }`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          className="hidden"
          onChange={handleFileInput}
        />

        <div className="text-center">
          {!previewUrl ? (
            <div className="text-center flex flex-col items-center">
              <BsUpload className="text-[40px]" />
              <p className="mb-2 text-gray-500">
                Drag and drop a file here or click to select
              </p>
            </div>
          ) : (
            <div className="w-fit relative">
              <img
                src={previewUrl}
                alt="Preview"
                className="h-[120px] mx-auto mb-2"
              />
              <button
                className="absolute top-0 right-0 p-1 text-red-500"
                onClick={clearPreview}
              >
                X
              </button>
            </div>
          )}
        </div>
        {selectedFile && (
          <div>
            <p>File name: {selectedFile.name}</p>
            <p>File size: {selectedFile.size} bytes</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default SingleFileUploader;

{
  /* <div className="text-center">
          {!selectedFile ? (
            <div className="text-center flex flex-col items-center">
              <BsUpload className="text-[40px]" />
              <p className="mb-2 text-gray-500">
                Drag and drop a file here or click to select
              </p>
            </div>
          ) : null}

          {!previewUrl ? (
            <p className="mb-2 text-gray-500">Drag and drop a file here or click to select</p>
          ) : (
            <img src={previewUrl} alt="Preview" className="max-h-40 mx-auto" />
          )}
        </div> */
}
