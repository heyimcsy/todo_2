import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userId } from '../redux/modules/todos'

const Detail = () => {
  const dispatch = useDispatch
  const navigate = useNavigate()
  return (
    <div>
      {dispatch(userId)}
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        이전으로
      </button>
    </div>
  )
}

export default Detail
