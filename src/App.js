import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setState] = useState(0)
  const [inputNumber, setInputNumber] = useState(0)

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark" style={{ minHeight: "100vh" }}>
      <div className='container bg-white py-4'>
        <div className="row mb-5 mt-5 justify-content-center text-center">
          <h2>Counter</h2>
        </div>
        <div className="row justify-content-center my-2 mb-5">
          <div className='col-1  text-end'>
            <button className='btn btn-danger' onClick={() => setState(state-1)}>-</button>
          </div>
          <div className='col-2'>
            <input type='number' className='form-control' value={state} readOnly></input>
          </div>
          <div className='col-1'>
            <button className='btn btn-success' onClick={() => setState(state+1)}>+</button>
          </div>
        </div>
        <div className='row justify-content-center my-2 mb-5'>
          <div className='col-2'>
            <input type='number' className='form-control' onChange={(e) => setInputNumber(Number(e.target.value))}></input>
          </div>
          <div className='col-1'>
            <button className='btn btn-primary' onClick={() => setState(state + inputNumber)}>Add</button>
          </div>
          <div className='col-1'>
            <button className='btn btn-secondary' onClick={() => setState(state - inputNumber)}>Deduct</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
