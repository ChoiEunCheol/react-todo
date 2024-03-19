// List 컴포넌트
import React, { useState, useEffect } from "react";
import Input from "./Input";

const List: React.FC = () => {
  const [test3, setTest3] = useState<string[]>([]);

  useEffect(() => {
    const test = window.localStorage.getItem("todo-List");
    const test2 = test ? JSON.parse(test) : [];
    setTest3(test2);
  }, []); 

  useEffect(() => {
    function handleStorageChange(event: StorageEvent) {
      if (event.key === "todo-List") {
        const updatedList = event.newValue ? JSON.parse(event.newValue) : [];
        setTest3(updatedList);
      }
    }

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); 

  const handleSave = (value: string) => {
    if (value.trim()) {
      const updatedList = [...test3, value];
      setTest3(updatedList);
      window.localStorage.setItem("todo-List", JSON.stringify(updatedList));
    }
  };

  return (
    <div>
      <Input onSave={handleSave} /> {/* Input 컴포넌트 렌더링 */}
      <ul>
        {test3.map((element: string, index: number) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
