import TestimonialsEditComponent from "@components/adminPanel/testimonials/TestimonialsEditComponent";
import testimonialsArray from "@utils/lists/testimonials";

const BlogEditPage = ({ params }) => {
  const testimonialsList = testimonialsArray;
  const id = params.id;
  const testimonial = testimonialsList.find((individualTestimonial) => individualTestimonial.id === Number(id));
  
  return (
    <>
      <TestimonialsEditComponent testimonialsData={testimonial} />
    </>
  );
}
 
export default BlogEditPage;