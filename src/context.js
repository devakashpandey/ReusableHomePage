import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer" // 8

const initialState = {  // 6
   name: " ",
   initialState: " "
}

export const AppContext = createContext(); // 1

export const AppProvider = ({ children }) =>{  // 2
 
   const [state, dispatch ] = useReducer(reducer, initialState) // 5

   const updateHomePage = () => { // 7 
     return dispatch({
         type: "HOME_UPDATE",
         payload: {
            name: "AKASH PANDEY AKKY",
            image: "./asset/akky.jpeg"
         }
      })
   }

   const updateAboutPage = () => { // 7
      return dispatch({
         type: "ABOUT_UPDATE",
         payload : {
            name : "KINSHU PANDEY",
            image : "./asset/kinshu.jpg"
         }
      })
   }

   return(  // 3
      <AppContext.Provider value={{ ...state, updateAboutPage, updateHomePage  }}>
          {children}
      </AppContext.Provider>
)


}

export const GlobalContextValue = () => useContext(AppContext) // 4

