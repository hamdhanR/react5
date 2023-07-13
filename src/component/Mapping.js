import React from 'react'

function Mapping() {
    const names=["gova","samyuktha",'sam anderson']
    const head={
      fontSize:'72px',color:'orange'
    }
    
  return (
    <div>{
     names.map(name => <h2 style={head}>{name}</h2>)
    }
    </div>
  )
}

export default Mapping