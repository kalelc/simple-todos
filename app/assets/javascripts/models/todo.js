var Todo = Backbone.Model.extend({
  //urlRoot: '/api/v1/todos',
  defaults: function() {
  return {
    title: "",
    done: false
    };
  },
  toggle: function() {
    this.save({done: !this.get("done")});
  }
});
