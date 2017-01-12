if (!Meteor.settings.public.zeerat) {

  console.warn(`Missing zeerat settings`);

} else if(!Meteor.settings.public.zeerat.id){

  console.warn(`Meteor.settings.public.zeerat.id is required.\nYou may disable Zeerat using Meteor.settings.public.zeerat.disable: [true/false]`);

} else if (!Meteor.settings.public.zeerat.disable) {
  (function(t,r,a,c,k,i,n,g){
    t[k]=t[k]||{t:1*new Date(),k:i};
    n=r.createElement(a),g=r.getElementsByTagName(a)[0];
    n.async=1;n.src=c;g.parentNode.insertBefore(n,g)
  })(window,document,'script','//cdn.zeerat.com/track.js','Zeerat', Meteor.settings.public.zeerat.id);
}