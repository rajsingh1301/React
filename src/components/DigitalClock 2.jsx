import React,{useState,useEffect} from 'react'

const digitalclock = () => {
    const [time , setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(() =>{
          setTime(new Date())
        },1000);
        return () =>{
          clearInterval(intervalId)
        }
    },[])
    function formatTime(){
      const hours = time.getHours()
      const mins = time.getMinutes()
      const secs = time.getSeconds()
      return `${hours}:${mins}:${secs}`
    }
  return (
    <div>
        <span>{formatTime()}</span>
    </div>
  )
}

export default digitalclock 