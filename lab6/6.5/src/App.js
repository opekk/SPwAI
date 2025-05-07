import { useState } from 'react'
import Result from './components/Results'
import KeyPad from './components/Keypad'
import './App.css'

function App(){
  const [state, setState] = useState ({result: ""})
  const onClick = button => {
    switch(button){
      case "=":
        calculate()
        break
      case "C":
        reset()
        break
      case "CE":
        backspace()
        break
      default:
        setState({result: state.result + button})

    }
  }


  const calculate = () => {
    try {
      const result = eval(state.result);
      if (result === Infinity || result === -Infinity) {
        setState({ result: "Cannot divide by 0" });
      } else {
        setState({ result: result.toString() });
      }
    } catch (e) {
      setState({ result: "error" });
    }
  };
  

const reset = () => {
  setState({
    result: ""
  })
}

const backspace = () => {
  setState({
    result : state.reset.slice(0, -1)
  })
}

return (
  <div>
    <div className='srodek'>
      <h3>Kalkulator</h3>
      <Result result ={state.result} />
      <KeyPad onClick = {onClick} />
    </div>
  </div>
)
}
export default App