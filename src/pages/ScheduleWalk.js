import React from 'react';
import ScheduleForm from '../Components/ScheduleForm'

export default function ScheduleWalk() {
  const handleAddWalk = (newWalk) => {
    console.log('Nuevo paseo agregado:', newWalk);
  };

  return (
    <div>
      <ScheduleForm onAddWalk={handleAddWalk} />
      
    </div>
  );
}