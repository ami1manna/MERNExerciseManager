import {WorkoutContext}  from '../context/WorkoutContext';
import {useContext} from 'react';

export const useWorkoutContext = ()=>{
    const context = useContext(WorkoutContext)

    if(!context)
    throw Error('useWorkout must be used inside an WorkoutContext')

    return context
}