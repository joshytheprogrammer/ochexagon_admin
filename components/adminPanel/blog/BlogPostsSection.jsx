import blogPostArray from "@utils/blogposts";
import Link from "next/link";
import { BiSolidPencil } from "react-icons/bi";
// import { MdDelete } from "react-icons/md";

const BlogSectionComponent = () => {
  const posts = blogPostArray;

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full flex flex-col-reverse mo-lg:flex-row mo-lg:justify-between mb-6">
        <div className="flex">
          <div className="datalength-btn px-3 mr-4">20 Posts</div>
          <button className="adddata-btn rounded-[4px]">Add Post</button>
        </div>

        <div className="w-full mb-3 mo-lg:mb-0 mo-lg:w-[35%]">
          <input type="text" className="search-bar w-full" />
        </div>
      </div>

      <div className="h-[75%] mo-lg:h-[90%] scrollable-content overflow-auto">
      <table className="table w-max mo-lg:w-full h-full text-left mo-lg:text-xl">
          <thead>
            <tr className="border-b-[1px] border-black">
              <th className="pb-4 p-3">Last Modified</th>
              <th className="pb-4 p-3">Topic</th>
              <th className="pb-4 p-3">Author</th>
              <th className="pb-4 p-3">Actions</th>
            </tr>
          </thead>

          <tbody className="w-full font-semibold">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="text-[30px] flex p-3">
                  <Link href={`/blog/posts/${post.id}`} className="text-primary-color mr-3">
                    <BiSolidPencil />
                  </Link>
                  {/* <button className="text-red">
                    <MdDelete />
                  </button> */}
                </td>
                <td className="p-3">{post.topic}</td>
                <td className="p-3">{post.author}</td>
                <td className="p-3">{post.lastModified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogSectionComponent;
