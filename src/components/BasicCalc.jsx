import React from "react";
import { add, sub, mul, div } from "./arith";
const BasicCalc = () => {
    return (<>
        <ul>
            <li>Sum of Two Numbers:- {add(30, 3)}</li>
            <li>Subtraction of Two Numbers:- {sub(30, 3)}</li>
            <li>Multiplication of Two Numbers:- {mul(10, 3)}</li>
            <li>Division of Two Numbers:- {div(10, 3)}</li>
        </ul>
    </>)

}
export default BasicCalc