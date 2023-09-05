"use client";

import blogPostArray from "@utils/lists/blogposts";
import useSearch from "@utils/customHooks/useSearch";
import Link from "next/link";
import { useContext, useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import BlogPostsContext from "@utils/context/BlogPostsContext";
import { displayDateOrTime } from "@utils/firebase/utils";

const BlogSectionComponent = () => {
  // const posts = blogPostArray;
  // const postTopics = "topic";
  // const [searchInput, setSearchInput] = useState("");

  // const { filteredData } = useSearch(posts, postTopics, searchInput);

  const { blogPosts, loading } = useContext(BlogPostsContext);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full flex flex-col-reverse mo-lg:flex-row mo-lg:justify-between mb-6">
        <div className="flex">
          <div className="datalength-btn px-3 mr-4">20 Posts</div>
          <Link href={`/blog/posts/new`} className="adddata-btn rounded-[4px]">
            Add Post
          </Link>
        </div>

        <div className="w-full mb-3 mo-lg:mb-0 mo-lg:w-[35%] relative">
          <input
            type="text"
            className="search-bar w-full pl-[55px]"
          />
          <HiOutlineSearch className="text-2xl absolute left-[20px] top-[6px] text-primary-color" />
        </div>
      </div>

      <div className="h-[75%] mo-lg:h-[90%] scrollable-content overflow-auto">
        <table className="table w-max mo-lg:w-full h-fit text-left mo-lg:text-xl">
          <thead>
            <tr className="border-b-[1px] border-black">
              <th className="pb-4 p-3">Actions</th>
              <th className="pb-4 p-3">Topic</th>
              <th className="pb-4 p-3">Author</th>
              <th className="pb-4 p-3">Last Modified</th>
            </tr>
          </thead>

          {blogPosts.length == 0 ? (
            <div>No result found</div>
          ) : (
            <tbody className="w-full font-semibold">
              {blogPosts.map((post) => (
                <tr key={post.id} className="h-fit">
                  <td className="text-[30px] flex p-3">
                    <Link
                      href={`/blog/posts/${post.id}`}
                      className="text-primary-color mr-3"
                    >
                      <BiSolidPencil />
                    </Link>
                  </td>
                  <td className="p-3 h-fit">{post.data.title}</td>
                  <td className="p-3 h-fit">Owner</td>
                  <td className="p-3 h-fit">{displayDateOrTime(post.data.dateCreated)}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default BlogSectionComponent;
