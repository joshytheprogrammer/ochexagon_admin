import testimonialsArray from "@utils/testimonials";

const BlogEditPage = ({ params }) => {
  const testimonialsList = testimonialsArray;
  const id = params.id;
  const testimonial = testimonialsList.find((individualTestimonial) => individualTestimonial.id === Number(id));
  
  return (
    <>
      <h1>{testimonial.id}</h1>
    </>
  );
}
 
export default BlogEditPage;