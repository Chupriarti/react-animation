import React from 'react';
import './App.css';


function App() {
  const [text, setText] = React.useState('')
  const [todoList, setTodoList] = React.useState(
    [
      {id: 1, text: "Start job"},
      {id: 2, text: "Do job"},
      {id: 3, text: "Finish job"},
    ]
  )

  function addTodo() {
    setTodoList([...todoList, {id: Date.now(), text}])
  }

  return (
    <div className="App">
      <div>
        <input onChange={e => setText(e.target.value)} value={text} type="text"/>
        <button onClick={() => addTodo()}>Add item</button>
      </div>
      <ul>
        {todoList.map(({id, text}) => 
          <li onClick={() => setTodoList([...todoList.filter(todo => todo.id !== id)])} key={id}>{id} {text}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
