"use client";

const BlogEditComponent = () => {
  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <div className="h-full">
      <form
        action=""
        className="w-full h-full flex flex-col-reverse sm:flex-col pr-2 overflow-auto scrollable-content"
      >
        <div className="w-full flex justify-end mb-12">
          <input
            type="submit"
            value="Save"
            className="w-full sm:w-fit text-white bg-primary-color py-1 px-6 rounded-md text-lg cursor-pointer"
          />
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:mb-8">
            <div className="input-container w-full sm:w-[45%]">
              <label htmlFor="">Title</label>
              <input type="text" />
            </div>
            <div className="input-container w-full sm:w-[45%]">
              <label htmlFor="">Cover Image</label>
              <input type="file" accept="image/*" />
              {/* <FileUploader /> */}
            </div>
          </div>
          <div className="input-container mb-12">
            <label htmlFor="" className="font-bold">
              Content
            </label>
            <textarea className="h-[200px] overflow-hidden min-h-[300px]" onInput={(e) => adjustTextareaHeight(e.target)}></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogEditComponent;
