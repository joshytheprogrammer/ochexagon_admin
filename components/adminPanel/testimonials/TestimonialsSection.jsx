"use client"

import useSearch from "@utils/customHooks/useSearch";
import testimonialsArray from "@utils/lists/testimonials";
import Link from "next/link";
import { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";

const TestimonialsComponent = () => {
  const testimonials = testimonialsArray;
  const testimonialsCaption = 'caption';
  const [searchInput, setSearchInput] = useState('');

  const { filteredData } = useSearch(testimonials, testimonialsCaption, searchInput);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full flex flex-col-reverse mo-lg:flex-row mo-lg:justify-between mb-6">
        <div className="flex">
          <div className="datalength-btn px-3 mr-4">20 Testimonials</div>
          <Link href={`/testimonials/new`} className="adddata-btn rounded-[4px]">Add Testimonial</Link>
        </div>

        <div className="w-full mb-3 mo-lg:mb-0 mo-lg:w-[35%] relative">
          <input type="text" className="search-bar w-full pl-[55px]" onChange={(e) => setSearchInput(e.target.value)} />
          <HiOutlineSearch className="text-2xl absolute left-[20px] top-[6px] text-primary-color" />
        </div>
      </div>

      <div className="h-[75%] mo-lg:h-[90%] scrollable-content overflow-auto">
        <table className="table w-max mo-lg:w-full h-fit text-left mo-lg:text-xl">
          <thead>
            <tr className="border-b-[1px] border-black">
              <th className="pb-4 p-3">Actions</th>
              <th className="pb-4 p-3">Caption</th>
              <th className="pb-4 p-3">Testifier</th>
              <th className="pb-4 p-3">Last Modified</th>
            </tr>
          </thead>

          {filteredData.length == 0 ? <div>No result found</div> : <tbody className="w-full font-semibold">
            {filteredData.map((testimonial) => (
              <tr key={testimonial.id}>
                <td className="text-[30px] flex p-3">
                  <Link href={`testimonials/${testimonial.id}`} className="text-primary-color mr-3">
                    <BiSolidPencil />
                  </Link>
                </td>
                <td className="p-3">{testimonial.caption}</td>
                <td className="p-3">{testimonial.testifier}</td>
                <td className="p-3">{testimonial.lastModified}</td>
              </tr>
            ))}
          </tbody>}
        </table>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
