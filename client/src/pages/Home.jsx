import { useEffect } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

// import component
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForms from '../components/WorkoutForms'

const Home = () => {
    const {workouts,dispatch} = useWorkoutContext()


    useEffect(()=>{
        // fires when pages is loaded only once
        const fetchWorkouts = async()=>{
            const response = await fetch('http://localhost:4000/api/workouts/');
            const json = await response.json();
            if(response.ok)
                {
                 dispatch({type:'SET_WORKOUT',payload:json});
                }
                
                console.log("Workouts loaded");
            
        }

        fetchWorkouts()

    },[])
    return (
    <div className="home">
        <div className="workouts">
            {workouts && workouts.map((workout)=>(
                <WorkoutDetails key={workout._id} workout={workout}></WorkoutDetails>
            ))}          
        </div>
        <WorkoutForms></WorkoutForms>
    </div>
  )
}

export default Home
