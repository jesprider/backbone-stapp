app.Router.App = Backbone.Router.extend({

    routes: {
        '': 'home',
        'menu': 'menu',
        'super-page': 'superPage',
        'error': 'error'
    },

    initialize: function() {
        console.log('Router init!');

        this.model = app.Models.user;
        var self = this;

        $(window).on('hashchange', function() {
            self.checkError();
        });

        this.checkError();
    },

    home: function () {
        this.model.set({state: 'Home'});
    },

    menu: function () {
        this.model.set({state: 'Menu'});
    },

    error: function () {
        this.model.set({state: 'Error'});
    },

    superPage: function () {
        this.model.set({state: 'SuperPage'});
    },

    checkError: function () {
        var hash = this.getHash();

        if (!this.checkRoute(hash)) {
            this.navigate('error', {trigger: true, replace: true});
        }
    },

    checkRoute: function (hash) {
        return _.has(this.routes, hash);
    },

    getHash: function () {
        var hash = document.location.hash,
            slashPosition = hash.indexOf('/');

        if (slashPosition !== -1) {
            hash = hash.substring(1, slashPosition);
        } else {
            hash = hash.substr(1);
        }

        return hash;
    }

});