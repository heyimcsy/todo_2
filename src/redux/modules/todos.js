// 액션 타입
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const DONE_TODO = 'DONE_TODO'
const USER_ID = 'USER_ID'

// 액션 크리에이터
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload }
}

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload }
}

export const doneTodo = (payload) => {
  return { type: DONE_TODO, payload }
}
export const userId = (payload) => {
  return { type: USER_ID, payload }
}

const initialState = {
  todos: [
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: '리액트 강의보기',
      body: '챕터 1부터 챕터 12까지 학습',
      isDone: false,
    },
    {
      id: 2, // id는 모두 고유값이어야 합니다.
      title: '점심 먹기',
      body: '점심 뭐먹지..?',
      isDone: false,
    },
  ],
}

const todosReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      }
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            }
          } else {
            return todo
          }
        }),
      }
    case USER_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload
        }),
      }

    default:
      return state
  }
}

export default todosReducer
