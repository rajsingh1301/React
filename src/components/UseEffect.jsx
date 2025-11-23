import React ,{useState, useEffect} from 'react'

const UseEffect = () => {
    const [width , setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener("resize", handleResize)
    console.log("event listner added");

    return () =>{
        window.removeEventListener("resize",handleResize)
         console.log("event listner removed");
    }
    }
    ,[])
    
    const handleResize = () =>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return (
    <div>
        <p>width:{width}</p>
        <p>height:{height}</p>
    </div>
  )
}

export default UseEffect