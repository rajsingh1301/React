import React,{useState} from 'react'

const UpdateAO = () => {
     const [cars , setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake , setCarMake] = useState("")
    const [carModel , setCarModel] = useState("")

    const handleAddCars = () =>{

    const newCars = {
        year: carYear,
        make : carMake,
        model:carModel
    }
    setCars(prevCars => [...prevCars,newCars])

     setCarYear(new Date().getFullYear())
     setCarMake("")
     setCarModel(" ")


    }
    const handleRemoveCars = (index) => {
         setCars(cars.filter((_,i) => i !==index))

    }
    const handleYearChange = (event) =>{
        setCarYear(event.target.value)
    }
     const handleMakeChange = (event) =>{
        setCarMake(event.target.value)
        
    }
     const handleModelChange = (event) =>{
        setCarModel(event.target.value)
    }
  return (
    <div>
    <h2>List of Cars Objects:</h2>
    <ul>
        {cars.map((car,index) =>
             <li key={index} onClick={() => handleRemoveCars(index)}>
                {car.year}{car.make}{car.model}
             </li>)}
    </ul>
    <input type="number" value={carYear} onChange={handleYearChange}/><br />
    <input type="text" value={carMake} onChange={handleMakeChange} /><br />
    <input type="text" value={carModel} onChange={handleModelChange}/><br />
    <button onClick={handleAddCars}> Add car</button>
    </div>
  )
}

export default UpdateAO
