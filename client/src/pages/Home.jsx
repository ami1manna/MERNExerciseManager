import { useEffect,useState } from 'react'

// import component
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    const [workouts,setWorkouts] = useState(null)
    useEffect(()=>{
        // fires when pages is loaded only once
        const fetchWorkouts = async()=>{
            const response = await fetch('https://workoutmanager-7ftm.onrender.com/api/workouts/');
            const json = await response.json();
            if(response.ok)
                {
                  setWorkouts(json);
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
    </div>
  )
}

export default Home
