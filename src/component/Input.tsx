import React,{ useState } from 'react';

function Input (){
    const [inputValue, setInputValue] = useState<string>('');
    
    const SaveInputData = () => {
        console.log(inputValue);
        window.localStorage.setItem('todo',inputValue)
    }

    return (
        <div>
        <input 
        placeholder="할 일을 추가하세요"
        onChange={(e) => setInputValue( e.target.value )}
        >
        </input>
        <button title="submit" type="submit" onClick={SaveInputData}> 🔎 </button>
        </div>
    )
}

export default Input;