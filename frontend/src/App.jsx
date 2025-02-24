import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import"prismjs/themes/prism-tomorrow.css"
import axios from 'axios'
import prism from "prismjs"
import Editor from 'react-simple-code-editor'
import Markdown from 'react-markdown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState("function sum(a, b) {\n  return a + b\n}")
  const [review, setReview] = useState(``)
  useEffect(() => {
  prism.highlightAll()
  });
  async function reviewCode(){
   const response =  await axios.post('http://localhost:3000/ai/get-review/', {code})
   console.log(response.data);
   setReview(response.data);
  }
  return (
    <>
     <main>
      <div className = "left">
        <div className = "code">
        <Editor
        value = {code}
        onValueChange = {code => setCode(code)}
        highlight = {code => prism.highlight(code, prism.languages.js, 'js')}
        padding = {10}
        style = {{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          backgroundColor: 'hhhhh',
          borderRadius: 5,
          height: "100%",
          width: "100%"
        }}
       />
        </div>
        <div onClick = {reviewCode}
        className = "review">Review</div>
      </div>
      <div className = "right">
        <Markdown>{review}</Markdown>
      </div>
     </main>
    </>
  )
}

export default App
