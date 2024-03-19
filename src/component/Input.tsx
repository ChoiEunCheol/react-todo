import React,{ useState } from 'react';

interface InputValue {
    value: string;
}

function Input (){
    const [inputValue, setInputValue] = useState<InputValue>( {value:''});
    
    const SaveInputData = () => {
        console.log(inputValue);
    }

    return (
        <div>
        <input 
        placeholder="할 일을 추가하세요"
        onChange={(e) => setInputValue({ value: e.target.value })}
        >
        </input>
        <button title="submit" type="submit" onClick={SaveInputData}> 🔎 </button>
        </div>
    )
}

export default Input;