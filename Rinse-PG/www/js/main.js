window.HomeView = Backbone.View.extend({

    template:_.template($('#home').html()),

    initialize: function() {
         //this.transition = 'slide';
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.Page1View = Backbone.View.extend({

    template:_.template($('#now').html()),

    events: {
      //'eventName, itemToListenTo' : functionToCall
      'click .back': 'goBack',
    },

    goBack:function(event){
        console.log(Backbone.useRevereseAnimOnNextScreen);
        Backbone.useRevereseAnimOnNextScreen = true;
        Backbone.history.navigate('', {trigger:true})
        return false;
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.Page2View = Backbone.View.extend({

    template:_.template($('#later').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.HowItWorksView = Backbone.View.extend({

    template:_.template($('#how-it-works').html()),

    initialize: function() {
         this.transition = 'slideup';
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "now":"now",
        "later":"later",
        "profile":"profile",
        "signup":"singup",
        "signin":"singin",
        "forgotpw":"forgotpw",
        "howitworks":"howitworks"
    },

    initialize:function () {
        // Handle back button throughout the application
        $('.back').on('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    home:function () {
        console.log('#home');
        this.changePage(new HomeView());
    },

    now:function () {
        this.changePage(new Page1View());
    },

    later:function () {
        this.changePage(new Page2View());
    },
    
    profile:function () {
        this.changePage(new Page2View());
    },
   
    signup:function () {
        this.changePage(new Page2View());
    },

    signin:function () {
        this.changePage(new Page2View());
    },

    forgotpw:function () {
        this.changePage(new Page2View());
    },

    howitworks:function () {
        this.changePage(new HowItWorksView());
    },
                                       

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition;
        if (page.transition) {
            transition = page.transition;
        }else{
            transition = 'slide'
        };
        var reverse;
        if(Backbone.useRevereseAnimOnNextScreen){
            reverse = true;
            //reset the var so the next screen doesnt reverse
            Backbone.useRevereseAnimOnNextScreen = false;
        }else{
            reverse = false;
            Backbone.useRevereseAnimOnNextScreen = false;
        }
        
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition, reverse:reverse});
    }

});

$(document).ready(function () {
    console.log('document ready');
    app = new AppRouter();
    Backbone.history.start();
    Backbone.useRevereseAnimOnNextScreen = false;
});