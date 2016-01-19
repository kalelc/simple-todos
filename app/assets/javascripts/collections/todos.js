var TodoCollection = Backbone.Collection.extend({
  url: 'api/v1/todos',
  model: Todo,
    done: function() {
      return this.where({done: true});
    },
    remaining: function() {
      return this.where({done: false});
    },
    nextOrder: function() {
      if (!this.length) return 1;
        return this.last().get('order') + 1;
      },
    comparator: 'order'
  });
