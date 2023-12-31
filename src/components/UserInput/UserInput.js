import React, {useState} from "react";
import classes from'./UserInput.module.css'

const initialUserInput = {'current-savings': 10000, 'yearly-contribution': 1200,  'expected-return': 10, 'duration': 10}

const UserInput = ({onCalculate}) => {

      const [userInput, setUserInput] = useState(initialUserInput)
      const submitHandler = (event) => {
            event.preventDefault();
            onCalculate(userInput)
      }

      const resetHandler = (initialUserInput) => {
            setUserInput(initialUserInput);
      }

      const inputHandler = (input, value) => {
            setUserInput((preInput) => {
                  return {
                  ...preInput, 
                  [input]:  +value, // the "+" converts the string value to a number
                  };
            });
      };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={(event)=>inputHandler('current-savings', event.target.value)} value={userInput['current-savings']} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(event)=>inputHandler('yearly-contribution', event.target.value)} value={userInput['yearly-contribution']} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(event)=>inputHandler('expected-return', event.target.value)} value={userInput['expected-return']}  type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event)=>inputHandler('duration', event.target.value)} value={userInput['duration']} type="number" id="duration" />
          </p>
        </div>
        <p className={classes.actions}>
          <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserInput;
