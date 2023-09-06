"use client"

import BlogEditComponent from "@components/adminPanel/blog/posts/BlogEditComponent";
import BlogPostsContext from "@utils/context/BlogPostsContext";
import { fetchBlogPosts } from "@utils/firebase/utils";
import { useContext, useEffect, useState } from "react";

const BlogEditPage = ({ params }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBlogPosts();
        setBlogPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  const id = params.id;

  const post = blogPosts.find((blogPost) => blogPost.id === id);
  
  return (
    <>
      <BlogEditComponent blogData={post} />
    </>
  );
}
 
export default BlogEditPage;