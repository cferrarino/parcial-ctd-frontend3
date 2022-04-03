import React from "react";
import Historial from "./Historial.js";
import Opciones from "./Opciones.js";
import data from "../data/data.json";

export default class Contenedor extends React.Component {

constructor() {
    super();
    this.state = {
        historial: [],
        opcionPrevia: '',
        aventura: data[0],
        contador: 1,
    }
}

handleOnClick = ({target}) => {
    this.setState({
        contador: this.state.contador + 1,
        opcionPrevia: (target.id).toUpperCase(),
    })
}

componentDidUpdate(prevProps, prevState) {
    let temp = this.state.historial;
    if(prevState.contador !== this.state.contador) {
        this.setState({
            aventura: data.find(aventura => aventura.id === `${this.state.contador}${this.state.opcionPrevia.toLowerCase()}`),
            historial: [...this.state.historial, this.state.opcionPrevia],
        })
        temp.push(this.state.opcionPrevia);
    }
}

render () {
    return(
        <div className="layout">
            <h1 className="historia">{this.state.aventura.historia}</h1>
            <Opciones opciones={this.state.aventura.opciones} handleOnClick={this.handleOnClick}/>
            <Historial historial={this.state.historial} opcionPrevia={this.state.opcionPrevia}/>
        </div>
    )
}

}
