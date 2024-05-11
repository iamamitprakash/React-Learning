function TodoList({ todos }) {
    return <ul className="">{todos.map((todo, index) => <li>{todo}</li>)}</ul>
}

export default TodoList;