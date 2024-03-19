// Input 컴포넌트
import React, { useState } from "react";

interface InputProps {
  onSave: (value: string) => void; // onSave 함수 타입 지정
}

const Input: React.FC<InputProps> = ({ onSave }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const saveInputData = () => {
    onSave(inputValue.trim()); // 입력값 onSave를 통해 전달
    setInputValue(''); // 입력값 초기화
  };

  return (
    <div>
      <input 
        placeholder="할 일을 추가하세요"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button title="submit" type="submit" onClick={saveInputData}> 🔎 </button>
    </div>
  );
}

export default Input;
