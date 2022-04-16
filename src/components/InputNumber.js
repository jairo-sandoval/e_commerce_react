import React from 'react';

const InputNumber = ({setValue, classId}) => {

    const increment = (handler, inputName) => {
        let input = document.getElementsByClassName(inputName)[0]
        let step = input.getAttribute("step")

        if (input.value === "") {
            input.value = 0 + parseInt(step)
            handler(input.value)
        } else {
            input.value = parseInt(input.value) + parseInt(step)
            handler(input.value)
        }
    }

    const decrement = (handler, inputName) => {
        let input = document.getElementsByClassName(inputName)[0]
        let step = input.getAttribute("step")
        let min = input.getAttribute("min")

        if (input.value === "" || input.value <= min) {
            input.value = 0 - 0
            handler(input.value)
        } else {
            input.value = parseInt(input?.value) - parseInt(step)
            handler(input.value)
        }
    }
    return (
        <div style={{"display" : "flex"}}>
            <button className="button_number decrement" onClick={() => decrement(setValue, classId)}> - </button>
            <input type="number" min="0" max="100000"
                step="10" className={`input_number ${classId}`} onChange={e => setValue(e.target.value)}
            />
            <button className="button_number increment" onClick={() => increment(setValue, classId)}> + </button>
        </div>
    );
};

export default InputNumber;