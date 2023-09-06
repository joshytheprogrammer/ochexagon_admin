"use client"

import TestimonialsEditComponent from "@components/adminPanel/testimonials/TestimonialsEditComponent";
import { fetchTestimonials } from "@utils/firebase/utils";
import { useEffect, useState } from "react";

const BlogEditPage = ({ params }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  const id = params.id;

  const testimonial = testimonials.find((testimonial) => testimonial.id === id);
  
  return (
    <>
      <TestimonialsEditComponent testimonialsData={testimonial} />
    </>
  );
}
 
export default BlogEditPage;