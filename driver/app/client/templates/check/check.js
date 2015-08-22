/*****************************************************************************/
/* Check: Event Handlers */
/*****************************************************************************/
Template.Check.events({
});

/*****************************************************************************/
/* Check: Helpers */
/*****************************************************************************/
Template.Check.helpers({
  image:function(){
    return [
      {name:"icon-01.png",title:'Driver Tracking',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
      {name:'icon-02.png',title:'Faster',content:' Aenean gravida in orci ac imperdiet. Nullam eget turpis lacinia,'},
      {name:'icon-03.png',title:'Easy',content:'Sed dictum dui ac eros faucibus blandit. Nulla metus nulla, bibendum sed diam at'}
    ]
  },

});

/*****************************************************************************/
/* Check: Lifecycle Hooks */
/*****************************************************************************/
Template.Check.onCreated(function () {
});

Template.Check.onRendered(function () {
});

Template.Check.onDestroyed(function () {
});
