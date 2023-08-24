import testimonialsArray from "@utils/testimonials";
import Link from "next/link";
import { BiSolidPencil } from "react-icons/bi";
// import { MdDelete } from "react-icons/md";

const TestimonialsComponent = () => {
  const testimonials = testimonialsArray;

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full flex flex-col-reverse mo-lg:flex-row mo-lg:justify-between mb-6">
        <div className="flex">
          <div className="datalength-btn px-3 mr-4">20 Testimonials</div>
          <button className="adddata-btn rounded-[4px]">Add Testimonial</button>
        </div>

        <div className="w-full mb-3 mo-lg:mb-0 mo-lg:w-[35%]">
          <input type="text" className="search-bar w-full" />
        </div>
      </div>

      <div className="h-[75%] mo-lg:h-[90%] scrollable-content overflow-auto">
        <table className="table w-max mo-lg:w-full h-full text-left mo-lg:text-xl">
          <thead>
            <tr className="border-b-[1px] border-black">
              <th className="pb-4 p-3">Actions</th>
              <th className="pb-4 p-3">Caption</th>
              <th className="pb-4 p-3">Testifier</th>
              <th className="pb-4 p-3">Last Modified</th>
            </tr>
          </thead>

          <tbody className="w-full font-semibold">
            {testimonials.map((testimonial) => (
              <tr key={testimonial.id}>
                <td className="text-[30px] flex p-3">
                  <Link href={`/blog/posts/${testimonial.id}`} className="text-primary-color mr-3">
                    <BiSolidPencil />
                  </Link>
                  {/* <button className="text-red">
                    <MdDelete />
                  </button> */}
                </td>
                <td className="p-3">{testimonial.caption}</td>
                <td className="p-3">{testimonial.testifier}</td>
                <td className="p-3">{testimonial.lastModified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
