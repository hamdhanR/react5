import React from 'react'

export const Greet=(props) => {

    const {name}=props
return (<div>
<h1>saravana {name}</h1>
{props.children}
</div>
)
}

