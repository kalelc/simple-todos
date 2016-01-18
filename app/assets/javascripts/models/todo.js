var Todo = Backbone.Model.extend({
  defaults: function() {
  return {
    title: "",
    order: Todos.nextOrder(),
    done: false
    };
  },
  toggle: function() {
    this.save({done: !this.get("done")});
  }
}
