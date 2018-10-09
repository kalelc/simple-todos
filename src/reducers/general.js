import * as Immutable from 'immutable';

export function generalStates(state = Immutable.fromJS({
  isFetching: false
}), action){
  switch(action.type){
    case 'FETCH_TODOS_START':
      return state.set('isFetching', true)
    case 'FETCH_TODOS_END':
      return state.set('isFetching', false)
    default:
      return state;
  }
}