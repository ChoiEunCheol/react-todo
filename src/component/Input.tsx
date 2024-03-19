import React,{ useState } from 'react';

function Input (){
    const [inputValue, setInputValue] = useState<string>('');
    
    const SaveInputData = () => {
        const LSArray = window.localStorage.getItem('todo-List');
        const LSArray2 = LSArray ? JSON.parse(LSArray) : [];
        LSArray2.push(inputValue);
        window.localStorage.setItem('todo-List', JSON.stringify(LSArray2));
        console.log(window.localStorage.getItem('todo-List'));
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