import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch();
   const count = useSelector(state => state.count);

   const handleIncreaseClick=()=>{
       const action = increase();
       dispatch(action)
   }
    return (
        <div>
            counter :{count}
            <div>
                <button onClick={handleIncreaseClick}>increase</button>
            </div>
        </div>
    );
}

export default CounterFeature;