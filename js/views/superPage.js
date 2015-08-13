app.Views.SuperPage = Backbone.View.extend({

    template: _.template($('#superPage-template').html()),

    initialize: function() {
        console.log('Super page init!');

        this.options = {
            title: 'Super page',
            btnText: 'Open menu!'
        };
    },

    render: function() {
        this.$el.append(this.template(this.options));
        return this;
    }

});