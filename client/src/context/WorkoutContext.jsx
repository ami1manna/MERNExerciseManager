import { createContext ,useReducer} from "react";
export const WorkoutContext = createContext()

export const workoutReducer = (state,action)=>{
    switch (action.type){
        case 'SET_WORKOUT':
            return {
                workouts:action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workouts:[action.payload,...state.workouts]
            }
        default:
        return state        
    }
};
export const WorkoutContextProvider =({children})=>{
    const [state,dispatch] = useReducer(workoutReducer,{
        workouts:null
    })
   

    return (
        <WorkoutContext.Provider value={{...state,dispatch}}>
            {/*  wrap which part can access the createContext */}
            {children}
        </WorkoutContext.Provider>
    )
}
