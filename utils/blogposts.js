const blogPostSample = {
  author: "Jane Doe",
  topicTemplate: "Lovely Weather Today",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, velit quis inventore, minima laboriosam in nulla laborum necessitatibus ducimus, delectus nostrum. Possimus nostrum provident explicabo delectus amet aliquam, mollitia quaerat natus?",
  created: "08/08/23",
  lastModified: "18/08/23"
};

let count = 20;
let blogPostArray = [];

for (let i = 0; i < count; i++) {
  const blogTopic = blogPostSample.topicTemplate + ' ' + i;
  const duplicatePosts = {...blogPostSample, id: i, topic: blogTopic};
  blogPostArray.push(duplicatePosts)
}

export default blogPostArray;