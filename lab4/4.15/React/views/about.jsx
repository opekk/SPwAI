const React = require('react')

const helloMessage = (props) => {
    return  <div> 
        Nazwisko: {props.nazwisko} <br />
        Email: {props.email} <br />
        Wiek: {props.wiek}
        </div>
            
}

module.exports = helloMessage