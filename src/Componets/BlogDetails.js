import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  const {id, title, author, category, data, content, tags} = post;

  return (
    <div className="bg-slate-100 rounded-lg flex flex-col justify-center">
      <NavLink to={`/blog/${id}`}>
        <span className="text-2xl">{title}</span>
      </NavLink>
      <p>
        By
        <span>{author}</span>
        on{" "}
        <NavLink to={`/categories/${category.replaceAll(" ", "-")}`}
        >        
        </NavLink>
      </p>

      <span >Posted on {data}</span>
      <span>{content}</span>
      <div>
        {tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}
          >
            <span className="text-blue-800">{`  #${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default BlogDetails;