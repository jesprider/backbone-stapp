app.Views.Menu = Backbone.View.extend({

    template: _.template($('#menu-template').html()),

    initialize: function() {
        console.log('Menu page init!');

        this.options = {
            title: 'Menu page',
            menu: {
                home: {
                    title: 'Home page',
                    url: '#'
                },
                superPage: {
                    title: 'Super page',
                    url: '#super-page'
                }
            }
        }
    },

    render: function() {
        this.$el.append(this.template(this.options));
        return this;
    }

});