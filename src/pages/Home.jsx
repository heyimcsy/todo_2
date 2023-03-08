import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, doneTodo } from '../redux/modules/todos'
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const todos = useSelector(({ todos }) => todos.todos)

  const array = new Uint32Array(1)
  window.crypto.getRandomValues(array)

  const [todo, setTodo] = useState({
    id: '',
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
              id: array[0],
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
              id: array[0],
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
        <div
          style={{
            backgroundColor: 'yellow',
          }}
        >
          <h1>Todos !</h1>
          <div
            style={{
              backgroundColor: 'green',
              display: 'flex',
            }}
          >
            {todos
              .filter((todo) => !todo.isDone)
              .map((todo) => (
                <div
                  style={{
                    backgroundColor: 'orange',
                    width: '200px',
                    height: '200px',
                    borderRadius: '20px',
                  }}
                  key={todo.id}
                >
                  <Link to="/detail">상세보기</Link>
                  <div>{todo.title}</div>
                  <div>{todo.body}</div>
                  <button onClick={() => dispatch(deleteTodo(todo))}>삭제하기</button>
                  <button onClick={() => dispatch(doneTodo(todo.id))}>{todo.isDone ? '취소!' : '완료!'}</button>
                </div>
              ))}
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
        >
          <h1> Done! </h1>
          <div
            style={{
              backgroundColor: 'green',
              display: 'flex',
            }}
          >
            {todos
              .filter((todo) => todo.isDone)
              .map((todo) => (
                <div
                  style={{
                    backgroundColor: 'orange',
                    width: '200px',
                    height: '200px',
                    borderRadius: '20px',
                  }}
                  key={todo.id}
                >
                  <Link to="/detail">상세보기</Link>
                  <div>{todo.title}</div>
                  <div>{todo.body}</div>
                  <button onClick={() => dispatch(deleteTodo(todo))}>삭제하기</button>
                  <button onClick={() => dispatch(doneTodo(todo.id))}>{todo.isDone ? '취소!' : '완료!'}</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
