App.InsuredController = Em.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },
  doneEditing: function() {
    this.set('isEditing', false);
  }
});
