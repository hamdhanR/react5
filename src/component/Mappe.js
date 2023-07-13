import React from 'react'
 function Mappe() {
    const love=[1,2,3,4,5]
    const j={color:"yellow"}
  return (
    <div>{
      love.map(i => <h1 style={j}>{i}</h1>)
    }
    </div>
  )
}
export default Mappe