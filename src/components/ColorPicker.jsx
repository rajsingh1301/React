import React , {useState}from 'react'

const ColorPicker = () => {
  const [foods , setFoods]= useState(["mango","apple","banana"])
   
  
  
  const hadleAddfood = () =>{
     const newFood = document.getElementById("foodInput").value ;
    document.getElementById("foodInput").value="" 
    setFoods(f => [...f,newFood])
}
  const hadleRemovefood = (index) =>{
    
    setFoods(foods.filter((_,i) => i !==index))
  }
  
  return (
    <div>
      <h2>List of Foods:</h2>
      <div className='carhandle'>
      <ul>
        {foods.map((food,index)=> 
        <li key={index} onClick={() => hadleRemovefood(index)}>{food}</li>)}
      </ul>
      <input type="text" id='foodInput' placeholder='Enter Food Name' />
      <button onClick={hadleAddfood}>Add food</button>
      </div>
    </div>
  )
}

export default ColorPicker
