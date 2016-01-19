var TodoStore = Reflux.createStore({
  listenables: [TodoActions],
  init: function(){
    this.todos = new TodoCollection();
  },
  onLoadTodo: function(){
    var _this = this;
    var params = {
      error: function(){
        _this.updateData(true);
      },
      success: function() {
        _this.updateData();
      },
    timeout: 15000  
    };
    this.todos.fetch(params);
  },
  updateData: function(error) {
    var todos = error ? null : this.todos ;
    this.trigger({
      todos: todos
    });
  }
})
