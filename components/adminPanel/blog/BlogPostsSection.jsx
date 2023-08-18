import blogPostArray from "@utils/blogposts";
import Link from "next/link";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const BlogSectionComponent = () => {
  const posts = blogPostArray;

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex justify-between mb-6">
        <div className="flex">
          <div className="datalength-btn px-3 mr-4">20 Posts</div>
          <button className="adddata-btn rounded-[4px]">Add Post</button>
        </div>

        <div className="w-[35%]">
          <input type="text" className="search-bar w-full" />
        </div>
      </div>

      <div className="h-full">
        <table className="table w-full h-full text-left text-xl">
          <thead>
            <tr className="border-b-[1px] border-black">
              <th className="pb-4">Last Modified</th>
              <th className="pb-4">Topic</th>
              <th className="pb-4">Author</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>

          <tbody className="w-full h-[300px] scrollable-content overflow-y-scroll font-semibold">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="p-3">{post.lastModified}</td>
                <td className="p-3">{post.topic}</td>
                <td className="p-3">{post.author}</td>
                <td className="text-[30px] flex p-3">
                  <Link href={`/blog/${post.id}`} className="text-primary-color mr-3">
                    <BiSolidPencil />{" "}
                  </Link>
                  <button className="text-red">
                    <MdDelete />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogSectionComponent;
