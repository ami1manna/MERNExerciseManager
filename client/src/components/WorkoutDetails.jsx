import {useWorkoutContext} from '../hooks/useWorkoutContext';

const WorkoutDetails = ({workout}) => {
  
  const {dispatch}  = useWorkoutContext();

  // to delete specefic item
  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/'+workout._id,{
      method: 'DELETE',
    })
    const json = await response.json()
    if(response.ok){
      //update context
      dispatch({type:'DELETE_WORKOUT',payload:json})
    }
  }
  return (
  <div className="workout-details">
    <h4>{workout.title}</h4>
    <p><strong>Load (kg):</strong>{workout.load}</p>
    <p><strong>Reps (kg):</strong>{workout.reps}</p>
    <p>{workout.createdAt}</p>
    <span onClick={handleClick}>delete</span>
  </div>

  )
}

export default WorkoutDetails
