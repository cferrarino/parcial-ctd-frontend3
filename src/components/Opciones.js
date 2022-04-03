import React from 'react';

export default class Opciones extends React.Component {

    componentWillUnmount() {
        alert("¡Game over! Actualizá la página para jugar de vuelta :)");
    }

    render() {
        return (
            <div className="opciones">
                <div className='opcion'>
                    <button id='a' className='botones' onClick={this.props.handleOnClick}>A</button>
                    <h2>{this.props.opciones.a}</h2>
                </div>
                <div className='opcion'>
                    <button id='b' className='botones' onClick={this.props.handleOnClick}>B</button>
                    <h2>{this.props.opciones.b}</h2>
                </div>
            </div>
        );
    }
}