import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../featuers/milk/milkSlice";


function MilkContainer() {
  const milk = useSelector((state) => state.milk);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Milk Number : {milk.numOfMilk}</h2>
      <button onClick={()=>dispatch(buyMilk())}>Buy milk</button>
    </div>
  );
}

export default MilkContainer;
