$(window).on("load", function(){
  function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0)
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;

  else
    return 0; //It is not IE
}

if (GetIEVersion() > 0){
  $(".svg-container").fadeOut(500);
}
else{
  var one = document.querySelector('.b'),
  length = one.getTotalLength();

  one.style.transition = one.style.WebkitTransition = 'none';
               one.style.strokeDasharray = length +" "+ length ;
               one.style.strokeDashoffset = length;
               one.getBoundingClientRect();
               one.style.transition = one.style.WebkitTransition = 'stroke-dashoffset 1.4s ease-in-out';
               one.style.strokeDashoffset = '0';

               setTimeout(function(){
                 $(".b").addClass("white");
                 $(".left, .right").addClass("out");
               }, 1500);
}



    // $(".b").one("animationiteration webkitAnimationIteration", function(){
    //   console.log("done");
    //   $(".a").addClass("out");
    // });

});
