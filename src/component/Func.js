import React from 'react'

function Func() {
    function clickhandle(){
        console.log("button clicked")
    }
  return (
    <div>
      <button onClick={clickhandle}>Click</button>
    </div>
  )
}

export default Func
