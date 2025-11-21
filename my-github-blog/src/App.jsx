import { useState } from 'react'
import './App.css'
import BlogHeader from './components/BlogHeader'
import BlogPosts from './components/BlogPosts'
import BlogFooter from './components/BlogFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BlogHeader />
      <main>
        <BlogPosts />
      </main>
      <BlogFooter />
    </div>
  )
}

export default App