import BlogPosts from "@components/adminPanel/blog/BlogPosts";

const BlogSection = () => {
  return (
    <div>
      <div>
        <div>
          <div>20 Posts</div>
          <button>Add Post</button>
        </div>

        <div><input type="text" /></div>
      </div>
      <BlogPosts />
    </div>
  );
};

export default BlogSection;
