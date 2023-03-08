import React from 'react'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
  const navigate = useNavigate()
  return (
    <div>
      Detail
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
