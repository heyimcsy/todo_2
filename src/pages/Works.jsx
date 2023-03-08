import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Works() {
  const navigate = useNavigate()
  return (
    <div>
      Works
      <br />
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        HOME으로 이동
      </button>
      <br />
      <Link to="/contact">contact페이지로 이동</Link>
    </div>
  )
}

export default Works
