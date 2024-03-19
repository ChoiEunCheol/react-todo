import { useState } from 'react';

interface inputProps {
    value : string;
}

function Input2(inputVlaue:inputProps) {
    const [inputValue, serInputValue] = useState();
  return (
    <div>
      <input placeholder="내용 추가"></input>
      <button title="Input2" type="submit"> 🔎 </button>
    </div>
  );
}

export default Input2;
