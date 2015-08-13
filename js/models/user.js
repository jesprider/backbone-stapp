app.Models.User = Backbone.Model.extend({

    defaults: {
        firstName: '',
        lastName: '',
        // current state of user, used for routing
        state: 'loading'
    },

    initialize: function() {
        console.log('User model init!');
    },

    /**
     * Установить свойство ошибки
     * Леер для отображения ошибки должен подписаться на него
     */
    throwError: function(param) {
        param = param || {};
        if (param.message) {
            console.error(param.message);
        }
        this.set({error: {
            message: param.message,
            isCritical: param.isCritical
        }});
    }
});