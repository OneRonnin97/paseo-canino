import React from 'react';
import ScheduleForm from '../Components/ScheduleForm'
import './schedulewalk.css'
import ScheduleLeft from '../Components/schedule-left/Schedule-left';

export default function ScheduleWalk() {
  const handleAddWalk = (newWalk) => {
    console.log('Nuevo paseo agregado:', newWalk);
  };

  return (
    <div className='schedule-container'>
        <div className='form-right'>
        <ScheduleForm onAddWalk={handleAddWalk} />
        </div>
        <div className='form-left'>
            <ScheduleLeft />
        </div>
      
      
    </div>
    
  );
}