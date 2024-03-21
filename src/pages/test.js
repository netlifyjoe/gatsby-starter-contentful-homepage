import * as React from "react"

export default function Test() {
  return (
    <div>
      <h1>Test</h1>
      <p>Test page</p>
      <button onClick={() => {
        fetch('/.netlify/functions/test')
          .then(response => response.text())
          .then(text => {
            console.log(text)
            window.alert(text)
          })
      }
        }>Test</button>
    </div>
  )
}