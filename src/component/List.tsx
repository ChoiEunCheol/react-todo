function List() {
  const test = window.localStorage.getItem("todo-List");

  return <div>{test}</div>;
}

export default List;
