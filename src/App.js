import BlocksToolbox from "./features/blocks/BlocksToolbox";
// import {useSelector} from "react-redux"

function App() {
  //const isLogged = useSelector(state => state.logged)

  return (
    <div className="App">
      <BlocksToolbox/>
      {/*{isLogged ? <h3>Hello boyo</h3> : ''}*/}
    </div>
  )
}

export default App;
