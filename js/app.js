app.Views.App = Backbone.View.extend({

    // App container
    el: '.container',

    // Config
    config: {
        selectors: {
            content: '.stapp_content',
            loader: '.stapp_loader'
        }
    },

    initialize: function () {
        console.log('App init!');

        this.init();
        this.listenTo(this.model, 'change:state', this.render);

        Backbone.history.start();
    },

    // Put here only common events for all pages
    events: {
        'click .js-open-menu': 'openMenu'
    },

    init: function () {
        // Create new instance of User (or another main model)
        app.Models.user = new app.Models.User();
        // Keep link to that model
        this.model = app.Models.user;

        // Create router
        app.Router.app = new app.Router.App();
    },

    render: function () {
        var state = this.model.get('state');
        this.state = state.toLowerCase();
        this.prevState = this.model.previous('state').toLowerCase();

        app.Views[this.state] = new app.Views[state]();
        this.loadView(app.Views[this.state]);
    },

    loadView: function(view) {
        // Remove view if it exists
        this.view && (this.view.close ? this.view.close() : this.view.remove());
        // Save link to current view
        this.view = view;

        // Update modificator for css issues
        this.$el
            .removeClass('__' + this.prevState)
            .addClass('__' + this.state);

        this.$(this.config.selectors.content).empty().append(this.view.render().el);
        this.$(this.config.selectors.loader).hide();

        // Fix top scroll because of hash navigation
        $(window).scrollTop(0);
    },

    openMenu: function() {
        app.Router.app.navigate('menu', {trigger: true});
    }
});

// Start our app
app.Views.app = new app.Views.App();