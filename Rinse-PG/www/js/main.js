window.HomeView = Backbone.View.extend({

    template:_.template($('#home').html()),

    initialize: function() {
         //console.log(appData)
    },

    render:function (eventName) {
        console.log(appData.user)
        var that = this;
        appData.user.fetch({
            type: 'POST',
            data: {email:"michael.aldape@salsamobi.com", password:"test"},
            success:function(user){
                //that.$el.html(template);
                //need to return user ID from server
                console.log(user)
                //console.log(appData.user)
                window.localStorage.username = user.get('name');
                $("#loading-indicator").hide();
                //$(that.el).html(that.template({extraHTML:popupHTML}));
                //return that;
            }
        })
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});

window.NowView = Backbone.View.extend({

     initialize: function() {
         //this.transition = 'slide';
    },

    template:_.template($('#now').html()),

    events: {
      //'eventName, itemToListenTo' : functionToCall
      'click .back': 'goBack',
    },

    goBack:function(event){
        Backbone.useRevereseAnimOnNextScreen = true;
        Backbone.history.navigate('', {trigger:true})
        return false;
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        setTimeout(function () {
            $(".content").scrollview();
        }, 100);

        return this;
    }
});

window.SignUp1 = Backbone.View.extend({

    template:_.template($('#signup1').html()),

    events: {
      //'eventName, itemToListenTo' : functionToCall
      'click .back': 'goBack',
    },

    goBack:function(event){
        Backbone.useRevereseAnimOnNextScreen = true;
        Backbone.history.navigate('', {trigger:true})
        return false;
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        setTimeout(function () {
            $(".content").scrollview();
        }, 100);

        return this;
    }
});

window.SignUp2 = Backbone.View.extend({

    template:_.template($('#signup2').html()),

    events: {
      //'eventName, itemToListenTo' : functionToCall
      'click .back': 'goBack',
    },

    goBack:function(event){
        Backbone.useRevereseAnimOnNextScreen = true;
        Backbone.history.navigate('#/now', {trigger:true})
        return false;
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});

window.SignUp3 = Backbone.View.extend({

    template:_.template($('#signup3').html()),

    events: {
      //'eventName, itemToListenTo' : functionToCall
      'click .back': 'goBack',
    },

    goBack:function(event){
        Backbone.useRevereseAnimOnNextScreen = true;
        Backbone.history.navigate('#/signup2', {trigger:true})
        return false;
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});

window.Confirm = Backbone.View.extend({

    template:_.template($('#confirm').html()),

    events: {
      //'eventName, itemToListenTo' : functionToCall
      'click .back': 'goBack',
    },

    goBack:function(event){
        Backbone.useRevereseAnimOnNextScreen = true;
        Backbone.history.navigate('#/', {trigger:true})
        return false;
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});

window.LaterView = Backbone.View.extend({

    template:_.template($('#later').html()),

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});

window.SignInView = Backbone.View.extend({

    template:_.template($('#signin').html()),

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});

window.HowItWorksView = Backbone.View.extend({

    template:_.template($('#how-it-works').html()),

    initialize: function() {
         this.transition = 'slideup';
    },

    events: {
      //'eventName, itemToListenTo' : functionToCall
      'click .close': 'onClose',
    },

    onClose:function(event){
        Backbone.useSlideDownAnimOnNextScreen = true;
        Backbone.history.navigate('', {trigger:true})
        return false;
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.ProfileView = Backbone.View.extend({

    template:_.template($('#profile').html()),

    initialize: function() {
         //this.transition = 'slide';
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});

window.BillingView = Backbone.View.extend({

    template:_.template($('#billing').html()),

    initialize: function() {
         //this.transition = 'slide';
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});
window.PromosView = Backbone.View.extend({

    template:_.template($('#promos').html()),

    initialize: function() {
         //this.transition = 'slide';
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});
window.ShareView = Backbone.View.extend({

    template:_.template($('#share').html()),

    initialize: function() {
         //this.transition = 'slide';
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});
window.AboutView = Backbone.View.extend({

    template:_.template($('#about').html()),

    initialize: function() {
         //this.transition = 'slide';
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});
window.SupportView = Backbone.View.extend({

    template:_.template($('#support').html()),

    initialize: function() {
         //this.transition = 'slide';
    },

    render:function (eventName) {
        $(this.el).html(this.template({extraHTML:popupHTML}));
        return this;
    }
});

var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "now":"now",
        "later":"later",
        "howitworks":"howitworks",
        "profile":"profile",
        "signin":"signin",
        "signup1":"signup1",
        "signup2":"signup2",
        "signup3":"signup3",
        "confirm":"confirm",
        "billing":"billing",
        "promos":"promos",
        "share":"share",
        "about":"about",
        "support":"support"
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
        this.changePage(new HomeView());
    },

    now:function () {
        Backbone.loggedIn = false;
        if (Backbone.loggedIn){
            this.changePage(new NowView());
        }else{
            Backbone.history.navigate("#/signup1", {trigger:true})
        }
        
    },

    later:function () {
        this.changePage(new LaterView());
    },
   
    signup1:function () {
        this.changePage(new SignUp1());
    },

    signup2:function () {
        this.changePage(new SignUp2());
    },

    signup3:function () {
        this.changePage(new SignUp3());
    },

    confirm:function () {
        this.changePage(new Confirm());
    },

    signin:function () {
        this.changePage(new SignInView());
    },

    forgotpw:function () {
        this.changePage(new HomeView());
    },

    howitworks:function () {
        this.changePage(new HowItWorksView());
    },

    profile:function () {
        this.changePage(new ProfileView());
    },

    billing:function () {
        this.changePage(new BillingView());
    },

    promos:function () {
        this.changePage(new PromosView());
    },

    share:function () {
        this.changePage(new ShareView());
    },

    about:function () {
        this.changePage(new AboutView());
    },

    support:function () {
        this.changePage(new SupportView());
    },
                                       

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        $('#popupMenu').remove();
        page.render();
        
        $('body').append($(page.el));
        $(page.el).append('<div id="loading-indicator">LOADING </div>');

        var transition;
        if (page.transition) {
            transition = page.transition;
        }else if(Backbone.useSlideDownAnimOnNextScreen){
            transition = 'slidedown';
            //reset var
            Backbone.useSlideDownAnimOnNextScreen = false;  
        }else{
            transition = 'slide';
        };
        var reverse;
        if(Backbone.useRevereseAnimOnNextScreen){
            reverse = true
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

//     try {
//       $.mobile.popup.active = null;
//       delete $.mobile.popup.active;
// } catch (e) { }
     }

});

// Models ------------------------------------------------------------------------------------
var User = Backbone.Model.extend({
        urlRoot:'user/get'
    })
// var Contacts = Backbone.Collection.extend({
//         url: '/contacts_api/contacts'
// });
// ------------------------------------------------------------------------------------


$(document).ready(function () {

    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
          options.url = 'http://rinse.herokuapp.com/public/' + options.url;
        });

    $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
    };

    appData = new Object();
    appData.user = new User();

    appRouter = new AppRouter();
    Backbone.history.start();
    Backbone.useRevereseAnimOnNextScreen = false;
    Backbone.useSlideDownAnimOnNextScreen = false;

});


 function goToPageFromPopup(link){
    $( "#popupMenu" ).on({
       popupafterclose: function(event, ui) {
        Backbone.history.navigate(link, {trigger:true})
        }
    });
    $('#popupMenu').popup('close');
}
function goPopup(){
    console.log($('#popupMenu'))
    $('#popupMenu').popup('open');
}

var appData;
var appRouter;

var profLink = "#/profile";
var billingLink = "#/billing";
var promosLink = "#/promos";
var shareLink = "#/share";
var aboutLink = "#/about";
var supportLink = "#/support";

var popupHTML = ''
popupHTML += '<div data-role="popup" id="popupMenu" data-theme="a" class="ui-popup ui-body-a ui-overlay-shadow ui-corner-all" aria-disabled="false" data-disabled="false" data-shadow="true" data-corners="true" data-transition="slidedown" data-position-to="origin">'
popupHTML += '<ul data-role="listview" data-inset="true" style="min-width:250px;" data-theme="a" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">'
popupHTML += '<li data-role="divider" data-theme="a" class="ui-li ui-li-static ui-btn-up-a ui-corner-top">SETTINGS</li>'
popupHTML += '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="javascript:goToPageFromPopup(profLink)" class="ui-link-inherit">PROFILE</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>'
popupHTML += '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="javascript:goToPageFromPopup(billingLink)" class="ui-link-inherit">BILLING</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>'
popupHTML += '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-li-last ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="javascript:goToPageFromPopup(promosLink)" class="ui-link-inherit">PROMOTIONS</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>'
popupHTML += '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="javascript:goToPageFromPopup(shareLink)" class="ui-link-inherit">SHARE</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>'
popupHTML += '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="javascript:goToPageFromPopup(aboutLink)" class="ui-link-inherit">ABOUT</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>'
popupHTML += '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-li-last ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="javascript:goToPageFromPopup(supportLink)" class="ui-link-inherit">CUSTOMER SUPPORT</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>'
popupHTML += '</ul>'
popupHTML += '</div>'