import { useState } from "react";

function Formularz({dodajPrace}){
    const [opis, setOpis] = useState('')
    const [nazwa, setNazwa] = useState('')
    const [data, setData] = useState('')
    const [priorytet, setPriorytet] = useState(false)

    const handleSubmit = (e) => {
        dodajPrace([opis,nazwa,data,priorytet])
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit} class="col-lg-6 offset-lg-3">
            <div class="form-group mb-3">
                <label class="form-label">Nazwa</label>
                <input type="text" name="nazwa" class="form-control" 
                value ={nazwa} onChange={e=>setNazwa(e.target.value)} />
            </div>
            <div class="form-group mb-3">
                <label class="from-label">Opis pracy</label>
                <input type="text" name="opis" class="form-control"
                value ={opis} onChange={e=>setOpis(e.target.value)} />
            </div>
            <div class="form-group mb-3">
                <label class="from-label">Date</label>
                <input type="text" name="data" class="form-control"
                value ={data} onChange={e=>setData(e.target.value)} />
            </div>
            <div class="form-group mb-3">
                <label class="from-label">Priorytet</label>
                <input type="checkbox" name="priorytet" 
                value ={priorytet} onChange={e=>setPriorytet(e.target.checked)}/>
            </div>
            <input type="submit" name="submit" class="btn btn-primary" value="Dodaj prace" />
        </form>
    )
}
export default Formularz