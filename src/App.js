import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        milisegundos: 0,
        segundos: 55,
        minutos: 59,
        horas: 23
      }
      this.interval = setInterval(this.chronometer,10)
    }



    chronometer = () => {
      this.setState((prevState) => ({
        milisegundos: (prevState.milisegundos + 1)
      }))
      if (this.state.milisegundos === 100) {
        this.setState((prevState) => ({
          milisegundos: 0,
          segundos: prevState.segundos + 1
        }))
      }
      if (this.state.segundos === 60) {
        this.setState((prevState) => ({
          segundos: 0,
          minutos: prevState.minutos + 1
        }))
      }
      if (this.state.minutos === 60) {
        this.setState((prevState) => ({
          minutos: 0,
          horas: prevState.horas + 1
        }))
      }
      if (this.state.horas === 24) {
        clearInterval(this.interval)
      }
    }

    componentDidUpdate() {
      const valors = Number(document.getElementById('segundos').innerHTML)
      const valorM = Number(document.getElementById('minutos').innerHTML)
      const valorH = Number(document.getElementById('horas').innerHTML)
      if (valors < 10) {
        document.getElementById('segundos').innerHTML= '0'+valors
      }
      if (valorM < 10) {
        document.getElementById('minutos').innerHTML= '0'+valorM
      }
      if (valorH < 10) {
        document.getElementById('horas').innerHTML= '0'+valorH
      }

    }

    render() {
      return(
        <div className="container border rounded m-5 bg-primary" style={{width:'450px'}}>
          <div className="row">
            <div className='col-sm-3 border-right p-3'>
              <span className="fa fa-clock-o fa-5x" style={{fontSize:'100px', color:'white'}}></span>
            </div>
            <div className='col-sm-9' >
              <div className="row">
                <div className='col-sm-12 text-center text-primary h3 mt-1' >
                  <strong className='text-white'>Cronómetro</strong>
                </div>
              </div>
              <div className='row text-white h1 text-center m-0 p-0 border rounded my-3 bg-info' >
                <div className='col-lg-2' id='horas'>{this.state.horas}</div>
                <div className='col-lg-1'>:</div>
                <div className='col-lg-2' id='minutos'>{this.state.minutos}</div>
                <div className='col-lg-1'>:</div>
                <div className='col-lg-2' id='segundos'>{this.state.segundos}</div>
                <div className='col-lg-1'>:</div>
                <div className='col-lg-2'>{this.state.milisegundos}</div>
              </div>
            </div>
          </div>
        </div>

      );
    }

  }

export default App;
