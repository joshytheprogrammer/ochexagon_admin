import BlogEditComponent from "@components/adminPanel/blog/posts/BlogEditComponent";
import blogPostArray from "@utils/blogposts";

const BlogEditPage = ({ params }) => {
  const blogPostList = blogPostArray;
  const id = params.id;
  const post = blogPostList.find((blogPost) => blogPost.id === Number(id));
  
  return (
    <>
      <BlogEditComponent blogData={post} />
    </>
  );
}
 
export default BlogEditPage;