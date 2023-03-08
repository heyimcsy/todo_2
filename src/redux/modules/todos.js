const ADD_TODO = 'ADD_TODO'

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload }
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

    default:
      return state
  }
}

export default todosReducer
