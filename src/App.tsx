import {names} from './names-list'
import {useWindowSize} from "@uidotdev/usehooks";
import Confetti from 'react-confetti'
import "./core.css";

function App() {
  const size = useWindowSize()
  return (
    <>
      <Confetti
      width={size.width ?? 0}
      height={size.height ?? 0}
      recycle={false}
    />
      <div className="griddiv">
        {names.map((name, index) => (
          <h1 key={index}>{name}</h1>
        ))}
      </div>
    </>
  )
}

export default App
