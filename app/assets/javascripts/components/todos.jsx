var TodoComponent = React.createClass({
  mixins: [Reflux.connect(TodoStore, "data")],
  getInitialState: function() {
    return { data: {} };   
  },
  componentDidMount: function() {
    TodoActions.loadTodo();
  },
  render: function() {
    var _this = this;
    if (_this.state.data.todos !== undefined) {
      var size = _this.state.data.todos.length;
      var todos = _this.state.data.todos.where({done: false});
      
      return ( <ul>
        {todos.map(function(todo){
          return ( <li key={todo.get('id')}> {todo.get('title')} </li> );
        })}
        </ul> );
    }
    else {
      return ( <div></div> );
    }
  }
});
