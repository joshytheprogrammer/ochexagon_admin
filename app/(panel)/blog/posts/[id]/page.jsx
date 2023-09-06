"use client"

import BlogEditComponent from "@components/adminPanel/blog/posts/BlogEditComponent";
import { fetchBlogPosts } from "@utils/firebase/utils";
import { useEffect, useState } from "react";

const BlogEditPage = ({ params }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBlogPosts();
        setBlogPosts(data);
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