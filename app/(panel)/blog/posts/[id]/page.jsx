import blogPostArray from "@utils/blogposts";

const BlogEditPage = ({ params }) => {
  const blogPostList = blogPostArray;
  const id = params.id;
  const post = blogPostList.find((blogPost) => blogPost.id === Number(id));
  
  return (
    <>
      <div>
        {post.id}
      </div>
    </>
  );
}
 
export default BlogEditPage;