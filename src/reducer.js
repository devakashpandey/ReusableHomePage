
export const reducer = (state, action) =>{  // 9
  switch(action.type){
       case "HOME_UPDATE" : return{
               ...state,
               name: action.payload.name,
               image: action.payload.image
       }

       case "ABOUT_UPDATE" : return{
           ...state,
           name: action.payload.name,
           image : action.payload.image
          
       }
  }
}
