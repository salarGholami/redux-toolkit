import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../featuers/cake/cakeSlice";


function CakeContainer() {
  const [value, setValue] = useState();

  const state = useSelector((state) => state.cake);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cake Number : {state.numOfCakes}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(value))}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
