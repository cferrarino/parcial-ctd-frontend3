import React from "react";

export default class Historial extends React.Component {
    
    render() {
        return(
            <div className='recordatorio'>
                <h3>Seleccion anterior: {this.props.opcionPrevia}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {this.props.historial.map((opcion, index) => {
                        return <li key={index}>{opcion}</li>
                    })}
                </ul>
            </div>
        )
    }
}