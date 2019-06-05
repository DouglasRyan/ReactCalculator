import React from "react";
import { Component } from "react";
import "./calculator.css"



function CalculatorOutput() {
  return <div>
    <p className="output">123210</p>
    </div>;
}

class CalculatorBtn extends Component {
  constructor(){
    super()
    this.state = {
      eq: "0",
      
    }
  }
  connectString = (a)=>{

    this.setState({
      eq:this.state.eq + a,
    })    
  }
  deleteString = (a)=>{
      let jg = this.state.eq.slice(0,-1)
      if(jg===""){
        jg = "0"
      }
      this.setState({eq:jg})
  }
  cal = ()=>{
      let jg = eval(this.state.eq)
      console.log("结果是"+jg)
      jg = String(jg)
      this.setState({
        eq:jg
      }) 
  }
  clearString = ()=>{
    this.setState({
      eq:"0"
    }) 
  }
  operator = (e)=>{
    let a = e.target.innerText
    if(this.state.eq === "0" && a !== "C" && a !== "CE" ){
      this.setState({eq : a})
    }else{
      switch(a){
        case "=" : 
          this.cal();
          break;
        case "C" :
          this.deleteString(a);
          break;
        case "CE" :
          this.clearString();
          break;
        default :
          this.connectString(a);
          break;
      }
    }

    
  }

  render() {
    return (
      <div className="operator"> 
          <div className="btnWrapper"></div>
          <div>
            <div class="container">
              <div class="pm">{this.state.eq} </div>
              <div class="wrapper">
                <button onClick={this.operator}>(</button>
                <button onClick={this.operator}>)</button>
                <button onClick={this.operator}>C</button>
                <button onClick={this.operator}>CE</button>
                <button onClick={this.operator}>7</button>
                <button onClick={this.operator}>8</button>
                <button onClick={this.operator}>9</button>
                <button onClick={this.operator}>/</button>
                <button onClick={this.operator}>4</button>
                <button onClick={this.operator}>5</button>
                <button onClick={this.operator}>6</button>
                <button onClick={this.operator}>*</button>
                <button onClick={this.operator}>1</button>
                <button onClick={this.operator}>2</button>
                <button onClick={this.operator}>3</button>
                <button onClick={this.operator}>-</button>
                <button onClick={this.operator}>0</button>
                <button onClick={this.operator}>.</button>
                <button onClick={this.operator}>=</button>
                <button onClick={this.operator}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default class Calculator extends Component {
  render() {
    return (
      <div>
        Calculator
        <CalculatorOutput />
        <CalculatorBtn />
      </div>
    );
  }
}