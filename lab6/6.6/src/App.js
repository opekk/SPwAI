import {useState, useTransition} from 'react'
import KartaPrac from './components/KartaPrac'
import Formularz from './components/Formularz'
import 'bootstrap/dist/css/bootstrap.css';
function App(){
  const [dziennikZadan, setDziennikZadan] = useState([])

  const dodajPrace = (zadanie) => {
    let zadania = [...dziennikZadan, zadanie]
    setDziennikZadan(zadania)
  }

  return(
    <section>
      <Formularz dodajPrace={dodajPrace} />
      <KartaPrac dziennik={dziennikZadan} />

    </section>
  )
}
export default App