import Temp from './features/Temp.js'
import {useSelector} from "react-redux"

function App() {
  const isLogged = useSelector(state => state.logged)

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Temp/>
      {isLogged ? <h3>Hello boyo</h3> : ''}
    </div>
  )
}

export default App;
