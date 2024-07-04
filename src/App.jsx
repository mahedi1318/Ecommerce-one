import { useReducer } from 'react'
import './App.css'
import Routes from './Routes'
import { ProductCardContext } from './context'
import { CardReducers, initialState } from './reducers/CardReducers'


function App() {
  
  const [state, dispatch] = useReducer(CardReducers, initialState)

  return (
    <>
      <ProductCardContext.Provider value={{state, dispatch}}>
        <Routes/>
      </ProductCardContext.Provider>
    </>
  )
}

export default App
