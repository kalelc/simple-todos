import * as Immutable from 'immutable';

export function entities(state = Immutable.fromJS({
  todos: []
}), action){
  switch(action.type){
    case 'FETCH_TODOS_END':
      return state.mergeIn(['todos'], Immutable.fromJS(action.data))
    default:
      return state;
  }
}