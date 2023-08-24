const TestimonialsEditComponent = ({ testimonialsData }) => {
  return (
    <div className="h-full">
      <h1>Testimonial{testimonialsData.id}</h1>
      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Profile Image</label>
          <input type="file" accept="image*" />
        </div>

        <div>
          <label htmlFor="">Location</label>
          <input type="text" placeholder="Lagos, Nigeria" />
        </div>

        <div>
          <label htmlFor="">Caption</label>
          <textarea></textarea>
        </div>
      </form>
    </div>
  );
};

export default TestimonialsEditComponent;
