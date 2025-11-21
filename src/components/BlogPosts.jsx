import BlogPost from './BlogPost';
import './BlogPosts.css';

const samplePosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first application.",
    date: "November 20, 2025",
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    id: 2,
    title: "Understanding GitHub Actions",
    excerpt: "A comprehensive guide to automating your workflows with GitHub Actions.",
    date: "November 18, 2025",
    tags: ["GitHub", "DevOps", "Automation"]
  },
  {
    id: 3,
    title: "Building a Personal Blog",
    excerpt: "How to create a beautiful and functional blog to showcase your work.",
    date: "November 15, 2025",
    tags: ["Blog", "Web Development", "Design"]
  }
];

const BlogPosts = () => {
  return (
    <section className="blog-posts">
      <div className="container">
        <h2>Latest Posts</h2>
        <div className="posts-grid">
          {samplePosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;