import './BlogFooter.css';

const BlogFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="blog-footer">
      <div className="container">
        <p>&copy; {currentYear} My GitHub Blog. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>Made with React and Vite</p>
      </div>
    </footer>
  );
};

export default BlogFooter;