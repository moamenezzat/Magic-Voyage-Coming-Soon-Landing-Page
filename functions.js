$(window).on("load", function(){
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
                  $(".a").addClass("out");
                }, 1500);
    // $(".b").one("animationiteration webkitAnimationIteration", function(){
    //   console.log("done");
    //   $(".a").addClass("out");
    // });

});
