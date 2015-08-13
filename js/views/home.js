app.Views.Home = Backbone.View.extend({

    template: _.template($('#home-template').html()),

    initialize: function() {
        console.log('Home view init!');

        this.options = {
            title: 'Home page',
            btnText: 'Open menu!'
        };
    },

    render: function() {
        this.$el.append(this.template(this.options));
        return this;
    }

});