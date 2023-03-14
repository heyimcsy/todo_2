import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, doneTodo } from '../redux/modules/todos'
import { Link } from 'react-router-dom'
import nextId from 'react-id-generator'
import { getValue } from '@testing-library/user-event/dist/utils'

const Home = () => {
  const dispatch = useDispatch()
  const todos = useSelector(({ todos }) => todos.todos)

  const id = nextId()

  const [todo, setTodo] = useState({
    id: 0,
    title: '',
    body: '',
    isDone: false,
  })

  console.log(todo)

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value, id: id }) //id값 연결
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (todo.title.trim() === '' || todo.body.trim() === '') return
    // if (todo.title === '' || todo.body === '') return
    setTodo({
      id: id,
      title: '',
      body: '',
      isDone: false,
    })
  }

  const onAddHandler = () => {
    console.log('id->', id.slice(2))
    dispatch(addTodo(todo))
  }

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
        <Form onSubmit={onSubmitHandler}>
          <input type="text" value="title" onChange={onChangeHandler} />
          <label>내용</label>
          <input type="text" value="body" onChange={onChangeHandler} />
          <button onClick={onAddHandler}>추가하기</button>
        </Form>
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
                  <Link to={`/${todo.id}`}>상세보기</Link>
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
                  <Link to={`/${todo.id}`}>상세보기</Link>
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
