import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

export default function CarForm() {

  const dispatch = useDispatch();

  const { name, cost } = useSelector((state)=>state.form);

  const handleNameChange = (event)=>{
    dispatch(changeName(event.target.value));
  }

  const handleCostChange = (event)=>{
    const tempCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(tempCost));
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(addCar({name, cost}));
  }


  return (
    <div className='car-form-panel'>
      <h4 className='subtitile is-3'>
        Add Car
      </h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              className='input is-expanded'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='field'>
            <label className='label'>Cost</label>
            <input
              className='input is-expanded'
              value={cost||''}
              onChange={handleCostChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
