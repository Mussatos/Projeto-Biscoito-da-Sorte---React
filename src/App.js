import React, { Component } from "react";
import './estilo.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = ['A vida trará coisas boas se tiver paciência.',
      'A sorte favorece a mente bem preparada.',
      'Tudo vai correr bem com o seu novo projeto.',
      'Vencer é 90 por cento suor e 10 por cento de engenho.',
      'Nós somos o que pensamos.',
      'Não compense na ira o que lhe falta na razão.'];

  }
  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao name="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
render(){
  return(
    <div>
      <button onClick={this.props.acaoBtn}>{this.props.name}</button>
    </div>
  );
}
}

export default App;