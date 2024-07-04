

const initialState = {
    cardData : []
}


const CardReducers = (state, action)=>{
    switch(action.type){
        case "add_to_card": {
            return{
                cardData : [...state.cardData, action.payload]
            }
        }
        break;
    }
}

export {initialState, CardReducers}