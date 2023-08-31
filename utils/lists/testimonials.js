const testimonialSample = {
  testifier: "Jane Doe",
  captionTemplate: "Nice Products",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, velit quis inventore, minima laboriosam in nulla laborum necessitatibus ducimus, delectus nostrum. Possimus nostrum provident explicabo delectus amet aliquam, mollitia quaerat natus?",
  created: "08/08/23",
  lastModified: "18/08/23"
};

let count = 20;
let testimonialsArray = [];

for (let i = 0; i < count; i++) {
  const testimonialCaption = testimonialSample.captionTemplate + ' ' + i;
  const duplicateTestimonials = {...testimonialSample, id: i, caption: testimonialCaption};
  testimonialsArray.push(duplicateTestimonials)
}

export default testimonialsArray;