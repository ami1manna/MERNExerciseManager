import { useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForms = () => {
    const {dispatch} = useWorkoutContext()
    const [title,setTitle] = useState('');
    const [load,setLoad] = useState(0);
    const [reps,setReps] = useState(0);
    const [error,setError] = useState(null);
    const handleSubmit= async(e)=>{
        e.preventDefault();

        const workout = {title,load,reps}
        console.log(workout);
        const response = await fetch('http://localhost:4000/api/workouts/',{
            method: 'POST',
            body:JSON.stringify(workout),
            headers:{
            'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new workout added successfully',json)
            dispatch({type:'CREATE_WORKOUT',payload:json})
        }
    };

    return (
    <>
      <form onSubmit={handleSubmit} className="create">
        <h3>Add new Workout</h3>
        <label>Exercise Title:</label>
        <input 
            type="text" 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
        />

        <label>Load (in Kg):</label>
        <input 
            type="number" 
            onChange={(e)=>setLoad(e.target.value)}
            value={load}
        />

        <label>Reps:</label>
        <input 
            type="number" 
            onChange={(e)=>setReps(e.target.value)}
            value={reps}
        />    
        <button>Add Workout</button>
        {error&& <div className="error">{error}</div>}
      </form>
    </>
  )
}

export default WorkoutForms
