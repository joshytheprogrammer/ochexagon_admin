const TestimonialsEditComponent = ({ testimonialsData }) => {
  return (
    <div className="h-full">
      <h1>Testimonial{testimonialsData.id}</h1>
      <form action="">
        <div className="input-container">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" />
        </div>

        <div className="input-container-file">
          <label htmlFor="">Profile Image</label>
          <input type="file" accept="image*" />
        </div>

        <div className="input-container">
          <label htmlFor="">Location</label>
          <input type="text" placeholder="Lagos, Nigeria" />
        </div>

        <div className="input-container">
          <label htmlFor="">Caption</label>
          <textarea>Caption</textarea>
        </div>
      </form>
    </div>
  );
};

export default TestimonialsEditComponent;
