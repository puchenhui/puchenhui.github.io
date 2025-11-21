import './BlogPost.css';

const BlogPost = ({ post }) => {
  return (
    <article className="blog-post-card">
      <div className="blog-post-content">
        <h3>{post.title}</h3>
        <span className="date">{post.date}</span>
        <p>{post.excerpt}</p>
        <div className="tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;