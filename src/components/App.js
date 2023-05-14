import React, {useReducer} from 'react';
import reducer, {initialState} from '../reducers';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import {  applyNumber, changeOperation, clearDisplay, save2memo} from '../actions';





function App() {
  


  const savetomemory = () => {
    dispatch(save2memo())

  }

  const clearCalculator =() => {
   
    dispatch(clearDisplay())
  }
  const handle1Click = (number) => {
    dispatch(applyNumber(number))
   
  }

  const handleOperationClick =(operation) => {
    dispatch(changeOperation(operation))

  }
  const [state, dispatch]= useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=>{
                dispatch(save2memo())
              }}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> {handle1Click(1)}}/>
              <CalcButton value={2}  onClick={()=> {handle1Click(2)}}/>
              <CalcButton value={3}  onClick={()=> {handle1Click(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> {handle1Click(4)}}/>
              <CalcButton value={5 } onClick={()=> {handle1Click(5)}}/>
              <CalcButton value={6} onClick={()=> {handle1Click(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> {handle1Click(7)}}/>
              <CalcButton value={8} onClick={()=> {handle1Click(8)}}/>
              <CalcButton value={9} onClick={()=> {handle1Click(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>{handleOperationClick("+")}}/>
              <CalcButton value={"*"} onClick={()=>{handleOperationClick("*")}}/>
              <CalcButton value={"-"} onClick={()=>{handleOperationClick("-")}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>{clearCalculator()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
