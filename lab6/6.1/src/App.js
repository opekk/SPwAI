import './Card.css'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card from './CardProps'

function App(){
return(
  <div>
    <h1>Słynni informatycy</h1>
    <Card name = "Alan Turing" src = "https://mdz.cs.pollub.pl/ai/alan_turing.jpg" date = "1912 - 1954" education = "Matematyk" country = "Anglia"  ></Card>
    <Card name = "Dennis Ritchie" src = "https://mdz.cs.pollub.pl/ai/dennis_ritchie.jpg"date = "1941 - 2011" education = "Matematyk, fizyk informatyk" country = "USA" ></Card>
    <Card name = "Niklaus Wirth" src = "https://mdz.cs.pollub.pl/ai/nicolas_wirth.jpg" date = "1934 - ?" education = "Elektronik i informatyk" country = "Szwajcaria" ></Card>
  </div>
)
}

export default App
