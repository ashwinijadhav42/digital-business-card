import BlogCard from "../components/BlogCard";

// sample images 
import blog1 from "../assets/images/blog/blog1.jpg";
import blog2 from "../assets/images/blog/blog2.jpg";
import blog3 from "../assets/images/blog/blog3.jpg";

function Blogs() {
  return (
    <>
      {/* HERO */}
      <section className="py-4  text-center">
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

            <BlogCard
              image={blog1}
              date="Jan 10, 2026"
              title="Why Digital Business Cards Are the Future"
              description="Discover how digital business cards are transforming professional networking."
            />

            <BlogCard
              image={blog2}
              date="Jan 15, 2026"
              title="How to Share Your Digital Card Effectively"
              description="Best practices to share your digital business card and get more leads."
            />

            <BlogCard
              image={blog3}
              date="Jan 18, 2026"
              title="Top Features Every Digital Card Must Have"
              description="Explore the must-have features for a modern digital business card."
            />

          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
