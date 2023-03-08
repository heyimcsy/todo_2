import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './redux/modules/todos'

const App = () => {
  const dispatch = useDispatch()
  const todos = useSelector(({ todos }) => todos.todos)

  const [todo, setTodo] = useState({
    id: new Date(),
    title: '',
    body: '',
    isDone: false,
  })

  console.log(todo)

  return (
    <>
      <div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div>My To Do List</div>
          <div>React</div>
        </div>
        <label>제목</label>
        <input
          type="text"
          value={todo.title}
          onChange={({ target: { value: title } }) => {
            setTodo((pre) => ({
              ...pre,
              title,
            }))
            console.log(title)
          }}
        />
        <label>내용</label>
        <input
          type="text"
          value={todo.body}
          onChange={({ target: { value: body } }) => {
            setTodo((pre) => ({
              ...pre,
              body,
            }))
            console.log(body)
          }}
        />
        <button
          onClick={() => {
            dispatch(addTodo(todo)) //행동(create), 데이터 ,todo
          }}
        >
          추가하기
        </button>
        <br />
        <div>
          <h1>Todos !</h1>
          {todos.map((todo) => (
            <div key={todo.id}>
              <div> {todo.title}</div>
              <div> {todo.body}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
