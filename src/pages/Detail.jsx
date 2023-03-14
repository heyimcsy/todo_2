import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { userId } from '../redux/modules/todos'

const Detail = () => {
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todos.todo)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(
    () => {
      dispatch(userId(id))
    },
    { dispatch, id }
  )
  return (
    <div>
      <div>ID : {todo.id}</div>
      {dispatch(userId)}
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        이전으로
      </button>
      <div>
        <div>{todo.tile}</div>
        <div>{todo.body}</div>
      </div>
    </div>
  )
}

export default Detail
