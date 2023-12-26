import './Counter.css';

import React, {useState} from 'react'

const Counter = () => {
    let [count, updatedCount] = useState(0);
  const Increase = () => {
    updatedCount(count + 1)
  }

  const Decrease = () => {
    updatedCount(count -1)
  }

  return (
    <div className='main-div'>
        <button className='Increase'onClick={ Increase }>Increase</button>
        <button className='Decrease' onClick={ Decrease }>Decrease</button>
        <br />
        <p id='count'>{count}</p>
    </div>
  )
}

export default Counter