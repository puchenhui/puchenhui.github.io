import './BlogHeader.css';

const BlogHeader = () => {
  return (
    <header className="blog-header">
      <div className="container">
        <h1>My GitHub Blog</h1>
        <p>Welcome to my personal blog - sharing thoughts on coding, technology, and life.</p>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#posts">Posts</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;