const messageSample = {
  senderName: "Jane Doe",
  email: "janedoe@example.com",
  message: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, velit quis inventore, minima laboriosam in nulla laborum necessitatibus ducimus, delectus nostrum. Possimus nostrum provident explicabo delectus amet aliquam, mollitia quaerat natus? 
    Quae rerum dicta magni commodi porro quam voluptatibus ratione! Nesciunt, odit beatae exercitationem alias nisi, quo optio earum quod ducimus numquam perspiciatis illo! 
    Eveniet quas vero dicta, ex possimus quisquam exercitationem nihil rerum magni non perferendis architecto? Libero velit non fuga labore deserunt sint unde doloribus quam, dolorum odit dignissimos nesciunt debitis corporis harum, aspernatur ab veritatis soluta. Harum!
  `,
  time: "20:30"
};

let count = 10;
let messagesArray = [];

for (let i = 0; i < count; i++) {
  const duplicateMessage = {...messageSample};
  messagesArray.push(duplicateMessage)
}

export default messagesArray;