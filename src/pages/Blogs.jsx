import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
  // react state
  const [blogs, setBlogs] = useState([]);

  // get blogs
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://react-interview.1putym.easypanel.host/api/blog");
        if (data?.status) {
          setBlogs(data?.data?.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <>
      <div className="containerCard">
        {blogs?.map((blog, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={blog.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the cards
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
