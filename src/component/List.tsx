function List() {
  const test = window.localStorage.getItem("todo");

  return <div>{test}</div>;
}

export default List;
