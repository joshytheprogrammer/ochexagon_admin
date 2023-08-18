import blogPostArray from "@utils/blogposts";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const BlogSectionComponent = () => {
  const posts = blogPostArray;

  return (
    <div>
      <div>
        <div>
          <div>20 Posts</div>
          <button>Add Post</button>
        </div>

        <div>
          <input type="text" />
        </div>
      </div>

      <div>
        <table>
          <tr>
            <th>Last Modified</th>
            <th>Topic</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.lastModified}</td>
              <td>{post.topic}</td>
              <td>{post.author}</td>
              <td>
                <button>
                  <BiSolidPencil />{" "}
                </button>
                
                <button>
                  <MdDelete />{" "}
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BlogSectionComponent;
