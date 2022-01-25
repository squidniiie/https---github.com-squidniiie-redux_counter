import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './static/App.css';
import { increment, decrement } from './actions/actions';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  // const reducer = useSelector(state => state.reducer)
  return (
    <div className='flex justify-center'>
      <div className="m-4 p-3 shadow-xl w-1/2 rounded-xl text-center">
        <h1 className='font-bold text-2xl font-Montserrat'>
          Redux Counter
        </h1>
        <h2 className='font-bold text-2xl font-Montserrat'>Counter {counter}</h2>
        <div className='flex justify-evenly'>
          <button className="bg-green-200 rounded-full p-4 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:shadow-xl" onClick={() => dispatch(decrement())}>-</button>
          <button className="bg-green-400 text-white hover:bg-green-300 rounded-full p-4 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-110 hover:shadow-xl" onClick={() => dispatch(increment())}>+</button>
        </div>
        {/* <h3>bug reducer {reducer}</h3> */}
      </div>
    </div>
  );
}

export default App;
