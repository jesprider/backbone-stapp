app.Views.Error = Backbone.View.extend({

    template: _.template($('#error-template').html()),

    initialize: function() {
        this.options = {
            title: "Wrong address",
            btnText: 'Open menu!'
        };
    },

    render: function() {
        this.$el.append(this.template(this.options));
        return this;
    }

});