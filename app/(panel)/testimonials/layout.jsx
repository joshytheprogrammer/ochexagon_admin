const TestimonialSectionLayout = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="font-bold text-[25px]">Blog Section</h1>
      
      <div className="bg-white border w-full h-[85%] lg:h-[90%] rounded-lg mt-6 py-4 px-2 mo-sm:px-4 first-letter:self-center justify-self-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default TestimonialSectionLayout;
