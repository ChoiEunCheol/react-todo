function List() {
    const test = window.localStorage.getItem("todo-List");
    const test2 = test ? JSON.parse(test) : [];
  
    return (
      <div>
          <ul>
              {test2.map((element:string, index:string) => (
                  <li key={index}>{element}</li>
              ))}
          </ul>
      </div>
    )
  }
  
  export default List;