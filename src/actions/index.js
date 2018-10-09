export function fetchTodos(){
  return function action(dispatch){
    dispatch(fetchTodosStart());
    setTimeout(()=>{
      const data = [
        {
          id: 1,
          name: 'Lorem ipsum dolor sit amet',
          checked: false
        }
      ]

      dispatch(fetchTodosEnd(data))
    })
  }
}

function fetchTodosStart(){
  return {
    type: 'FETCH_TODOS_START'
  }
}

function fetchTodosEnd(data){
  return {
    type: 'FETCH_TODOS_END',
    data
  }
}