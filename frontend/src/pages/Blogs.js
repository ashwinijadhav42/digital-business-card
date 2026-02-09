import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="py-4 text-center">
        <div className="container">
          <h1 className="fw-bold">Our Blogs</h1>
          <p className="text-muted mt-3">
            Insights, tips, and updates on digital business cards and modern networking.
          </p>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.imageUrl}
                date={blog.publishedDate}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
