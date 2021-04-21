import {useDispatch} from "react-redux"
import {toggleLogged} from "../actions"

function Temp() {
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(toggleLogged())}>Toggle</button>
    </>
  )
}

export default Temp;
