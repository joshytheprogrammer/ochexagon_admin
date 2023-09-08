import Link from "next/link";

const NotSignedIn = () => {
  return (
    <div className="w-full h-screen bg-gray flex flex-col justify-center items-center">
      <div className=" w-[95%] mo-sm:w-[85%] mo-md:w-[75%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[25%] rounded-lg bg-white flex flex-col p-6">
        <h1 className="font-bold text-xl mb-[50px]">You are not yet signed in!</h1>
        <Link href="/" className="bg-primary-color text-white px-4 py-2 text-center rounded-[4px] font-semibold">
          Go to login page
        </Link>
      </div>
    </div>
  );
};

export default NotSignedIn;
