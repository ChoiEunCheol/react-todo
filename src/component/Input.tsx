interface InputValue {
    value: string;
}

function Input (){
    return (
        <div>
        <input 
        placeholder="할 일을 추가하세요"
        >
        </input>
        <button title="submit" type="submit"> 🔎 </button>
        </div>
    )
}

export default Input;