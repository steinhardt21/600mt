







if ( $(window).width() > 700) { 



	$(".load").click(function(){
		$(".load").css("opacity","0");
setTimeout(function(){ 
	$(".load").css("display","none");
}, 2000);
	
});



	var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        //h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {

    // rgb = [
    //     Math.round(e.pageX/w * 250),
    //     0,
    //     250
    // ];

    var xxx = Math.round(e.pageX/w * 400);

    // $(document.body).css('color','rgb('+rgb.join(',')+')');
    // $(document.body).css('-webkit-text-stroke','rgb('+rgb.join(',')+')');
    $('#glyph').attr("style",  "font-variation-settings: 'wght'" + xxx );
    // console.log(xxx);

}).resize();




	$(".load").click(function(){
		$(".all").css("filter","none");
	
});



	

	$(document).on("pagecreate", function () {
		
		$(this).on('input', '.slider2', function() {

		valeurdemonslider = $(this).val();
		$('.typo').find('.test').css("letter-spacing",valeurdemonslider+"px");

	});
		
	});



	var tourneornot = 0;

	$(".bouton").click(function(){

		if (tourneornot===0) {

			$(".yolo").css("display","block");
			$(".partie_typo").css("transform","perspective(1000px) rotateY(-270deg)");
			document.getElementById("about").innerHTML = "Typefaces";
			tourneornot=1;

			mytimer2 = setTimeout(function(){ 
				$(".partie_typo").css("opacity","0");
			}, 2000);

			clearTimeout(mytimer);
		}

		else {

			$(".partie_typo").css("opacity","1");
			mytimer = setTimeout(function(){ 
				$(".yolo").css("display","none");
			}, 1500);


			$(".partie_typo").css("transform","perspective(0) rotateY(0)");
			document.getElementById("about").innerHTML = "About";
			tourneornot=0;

			clearTimeout(mytimer2);
		}
	});





  var tourneornot = 0;

  $(".abt").click(function(){

    if (tourneornot===0) {

      $(".yolo").css("display","block");
      $(".quizz").css("transform","perspective(1000px) rotateY(-270deg)");
      document.getElementById("about").innerHTML = "Quiz";
      tourneornot=1;

      mytimer2 = setTimeout(function(){ 
        $(".quizz").css("opacity","0");
      }, 2000);

      clearTimeout(mytimer);
    }

    else {

      $(".quizz").css("opacity","1");
      mytimer = setTimeout(function(){ 
        $(".yolo").css("display","none");
      }, 1500);


      $(".quizz").css("transform","perspective(0) rotateY(0)");
      document.getElementById("about").innerHTML = "About";
      tourneornot=0;

      clearTimeout(mytimer2);
    }
  });

  var tourneornot = 0;

  $(".reverse").click(function(){

    if (tourneornot===0) {

      $(".yolo").css("display","block");
      $(".result").css("transform","perspective(1000px) rotateY(-270deg)");
      document.getElementById("about").innerHTML = "Result";
      tourneornot=1;

      mytimer2 = setTimeout(function(){ 
        $(".result").css("opacity","0");
      }, 2000);

      clearTimeout(mytimer);
    }

    else {

      $(".result").css("opacity","1");
      mytimer = setTimeout(function(){ 
        $(".yolo").css("display","none");
      }, 1500);


      $(".result").css("transform","perspective(0) rotateY(0)");
      document.getElementById("about").innerHTML = "About";
      tourneornot=0;

      clearTimeout(mytimer2);
    }
  });







  $(".load").click(function(){
    $(".all").css("filter","none");
  
});


  $("#one1").mouseover(function(){
    $(".miu").css("display","block");  
  
});

 $("#one1").mouseout(function(){
    $(".miu").css("display","none");  
  
});


   $("#two1").mouseover(function(){
    $(".tschik2").css("display","block");  
  
});

 $("#two1").mouseout(function(){
    $(".tschik2").css("display","none");  
  
});


   $("#three1").mouseover(function(){
    $(".if").css("display","block");  
  
});

 $("#three1").mouseout(function(){
    $(".if").css("display","none");  
  
});
  


  $("#four1").mouseover(function(){
    $(".euphoria2").css("display","block");  
  
});

 $("#four1").mouseout(function(){
    $(".euphoria2").css("display","none");  
  
});


  $("#five").mouseover(function(){
    $(".comic2").css("display","block");  
  
});

 $("#five").mouseout(function(){
    $(".comic2").css("display","none");  
  
});


  $(".comic2").mouseover(function(){
    $(".comic2").css("display","block");  
  
});

  $(".comic2").mouseout(function(){
    $(".comic2").css("display","none");  
  
});



  $(".tschik2").mouseover(function(){
    $(".tschik2").css("display","block");  
  
});

  $(".tschik2").mouseout(function(){
    $(".tschik2").css("display","none");  
  
});


   $(".euphoria2").mouseover(function(){
    $(".euphoria2").css("display","block");  
  
});

  $(".euphoria2").mouseout(function(){
    $(".euphoria2").css("display","none");  
  
});

  $(".cruder2").mouseover(function(){
    $(".cruder2").css("display","block");  
  
});

  $(".cruder2").mouseout(function(){
    $(".cruder2").css("display","none");  
  
});





  $("#six").mouseover(function(){
    $(".cruder2").css("display","block");  
  
});

 $("#six").mouseout(function(){
    $(".cruder2").css("display","none");  
  
});

  $("#seven").mouseover(function(){
    $(".canvas").css("display","block");  
  
});

 $("#seven").mouseout(function(){
    $(".canvas").css("display","none");  
  
});


   $("#eight").mouseover(function(){
    $(".golia").css("display","block");  
  
});

 $("#eight").mouseout(function(){
    $(".golia").css("display","none");  
  
});








	$(".home").click(function(){
		if (tourneornot==1) {
			$(".partie_typo").css("transform","perspective(0) rotateY(0)");
			document.getElementById("about").innerHTML = "About";
			tourneornot=0;
		}
		else {}

	});

	   $('#select').change( function() {
	      location.href = $(this).val();
	   });



	$(".onglet").click(function(){
		$(".onglet").removeClass("onglet_active");
		$(".onglet").addClass("onglet_inactive");
		$(this).removeClass("onglet_inactive");
		$(this).addClass("onglet_active");

	});
	$(".third").click(function(){
		$(".firstco").css("display","none");
		$(".secondco").css("display","none");
		$(".thirdco").css("display","block");
		$(".fourco").css("display","none");
	});	

	$(".second").click(function(){
		$(".firstco").css("display","none");
		$(".secondco").css("display","block");
		$(".thirdco").css("display","none");
		$(".fourco").css("display","none");
	});	

		$(".first").click(function(){
		$(".firstco").css("display","block");
		$(".secondco").css("display","none");
		$(".thirdco").css("display","none");
		$(".fourco").css("display","none");
	});	

$(".four").click(function(){
		$(".fourco").css("display","block");
		$(".secondco").css("display","none");
		$(".thirdco").css("display","none");
		$(".firstco").css("display","none");
	});	






}

else {





	$(document).on('input', '.slider2', function() {

	valeurdemonslider = $(this).val();

	$(this).closest('.typo').find('.test').css("letter-spacing",valeurdemonslider+"px");

});




$(document).on('input', '.slider1', function() {

	valeurdemonslider = $(this).val();

	$(this).closest('.typo').find('.test').css("font-size",valeurdemonslider+"pt");

});



  var tourneornot = 0;

  $(".abt").click(function(){

    if (tourneornot===0) {

      $(".yolo").css("display","block");
      $(".quizz").css("transform","perspective(1000px) rotateY(-270deg)");
      document.getElementById("about").innerHTML = "Quiz";
      tourneornot=1;

      mytimer2 = setTimeout(function(){ 
        $(".quizz").css("opacity","0");
      }, 2000);

      clearTimeout(mytimer);
    }

    else {

      $(".quizz").css("opacity","1");
      mytimer = setTimeout(function(){ 
        $(".yolo").css("display","none");
      }, 1500);


      $(".quizz").css("transform","perspective(0) rotateY(0)");
      document.getElementById("about").innerHTML = "About";
      tourneornot=0;

      clearTimeout(mytimer2);
    }
  });

  var tourneornot = 0;

  $(".reverse").click(function(){

    if (tourneornot===0) {

      $(".yolo").css("display","block");
      $(".result").css("transform","perspective(1000px) rotateY(-270deg)");
      document.getElementById("about").innerHTML = "Result";
      tourneornot=1;

      mytimer2 = setTimeout(function(){ 
        $(".result").css("opacity","0");
      }, 2000);

      clearTimeout(mytimer);
    }

    else {

      $(".result").css("opacity","1");
      mytimer = setTimeout(function(){ 
        $(".yolo").css("display","none");
      }, 1500);


      $(".result").css("transform","perspective(0) rotateY(0)");
      document.getElementById("about").innerHTML = "About";
      tourneornot=0;

      clearTimeout(mytimer2);
    }
  });








var tourneornot = 0;

$(".bouton").click(function(){

	if (tourneornot===0) {
		$(".partie_typo").css("transform","perspective(1000px) rotateY(-90deg)");
		document.getElementById("about").innerHTML = "Typefaces";
		setTimeout(function(){ 
			$(".yolo").css("opacity","1");
		}, 2000);

		tourneornot=1;
	}

	else {
		$(".partie_typo").css("transform","perspective(0) rotateY(0)");
		document.getElementById("about").innerHTML = "About";
		$(".yolo").css("opacity","0");
		tourneornot=0;
	}
});



$(".home").click(function(){
	if (tourneornot==1) {
		$(".partie_typo").css("transform","perspective(0) rotateY(0)");
		document.getElementById("about").innerHTML = "About";
		$(".yolo").css("opacity","0");
		tourneornot=0;
		
	}
	else {}

});

   $('#select').change( function() {
      location.href = $(this).val();
   });







	
}



/* QUE LA DIV FORME SUIVE MA SOURIS*/
$(document).on('mousemove', function(e){

    $('#mouse_interactive').css({
       left:  (e.pageX),
       top:   (e.pageY)
    });
});


/* QUE LA DIV POINT SUIVE MA SOURIS*/
$(document).on('mousemove', function(e){

    $('#point').css({
       left:  (e.pageX),
       top:   (e.pageY)
    });
});




/* JE DÃ‰CLARE MES VARIABLES */
var euphoria=0;
var canvas=0;
var tschick=0;
var miumiu=0;
var if82=0;
var cruder=0;
var comicstrip=0;
var alexv=0;




/* QUAND JE CHOISIS CETTE REPONSE */
$("#techno").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
  alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;


  /* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("border-radius","0");
  $("#mouse_interactive").css("height","500vh");

  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE APRÃˆS UNE SECONDE */
  $("#question1").css("display","none");
  setTimeout(function(){$("#question2").css("display","flex");}, 1000);

});







/* QUAND JE CHOISIS CETTE REPONSE */
$("#organique").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
  alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;

  /* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("border-radius","50% 100%");

  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question1").css("display","none");
  setTimeout(function(){$("#question2").css("display","flex");}, 1000);

});







/* QUAND JE CHOISIS CETTE REPONSE */
$("#organisation").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
   alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;

  /* CHANGE MA FORME AINSI */
  $("#point").css("width","10px");
  $("#point").css("height","10px");

  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question2").css("display","none");
  setTimeout(function(){$("#question3").css("display","flex");}, 1000);

});








/* QUAND JE CHOISIS CETTE REPONSE */
$("#intuition").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
  alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;

  /* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("filter","blur(50px");
  $("#mouse_interactive").css("-webkit-filter","blur(50px)");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question2").css("display","none");
  setTimeout(function(){$("#question3").css("display","flex");}, 1000);

});











/* QUAND JE CHOISIS CETTE REPONSE */
$("#joie").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
  alexv+=1;
  canvas+=0;
  tschick+=1;
  miumiu+=0;
  if82+=0;
  euphoria+=1;
  comicstrip+=0;
  cruder+=1;

  /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("background-color","blue");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question3").css("display","none");
  setTimeout(function(){$("#question4").css("display","flex");}, 1000);

});








/* QUAND JE CHOISIS CETTE REPONSE */
$("#deprime").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
   alexv+=0;
  canvas+=1;
  tschick+=0;
  miumiu+=1;
  if82+=1;
  euphoria+=0;
  comicstrip+=1;
  cruder+=0;

 

  /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("background-color","red");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question3").css("display","none");
  setTimeout(function(){$("#question4").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#deal").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
 alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;

 

 /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("background-color","#6e00ff");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question4").css("display","none");
  setTimeout(function(){$("#question5").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#ignore").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;

 

/* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("background-color","yellow");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question4").css("display","none");
  setTimeout(function(){$("#question5").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#yes").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;



  /* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("filter","blur(50px");
  $("#mouse_interactive").css("-webkit-filter","blur(50px)");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question5").css("display","none");
  setTimeout(function(){$("#question6").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#no").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;



/* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("filter","blur(20px");
  $("#mouse_interactive").css("-webkit-filter","blur(20px)");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question5").css("display","none");
  setTimeout(function(){$("#question6").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#city").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=1;
  tschick+=0;
  miumiu+=1;
  if82+=1;
  euphoria+=0;
  comicstrip+=1;
  cruder+=0;

 

 /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("height","160px");
$("#mouse_interactive").css("width","200vw");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question6").css("display","none");
  setTimeout(function(){$("#question7").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#country").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=0;
  tschick+=1;
  miumiu+=0;
  if82+=0;
  euphoria+=1;
  comicstrip+=0;
  cruder+=1;


  /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("width","20vw");
$("#mouse_interactive").css("border-radius","0%");
$("#mouse_interactive").css("height","200vw");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question6").css("display","none");
  setTimeout(function(){$("#question7").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#event").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;


  /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("background-color","darkgrey");
$("#mouse_interactive").css("width","50vw");
$("#mouse_interactive").css("height","200vw");



  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question7").css("display","none");
  setTimeout(function(){$("#question8").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#netflix").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;


 /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("background-color","lightgrey");
$("#mouse_interactive").css("width","200vw");
$("#mouse_interactive").css("height","50vw");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question7").css("display","none");
  setTimeout(function(){$("#question8").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#inception").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;



 /* CHANGE MA FORME AINSI */
$(".question").css("font-family","till");



  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question8").css("display","none");
  setTimeout(function(){$("#question9").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#trip").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;


 /* CHANGE MA FORME AINSI */
 $(".question").css("font-family","babe");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question8").css("display","none");
  setTimeout(function(){$("#question9").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#detail").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=1;
  tschick+=0;
  miumiu+=1;
  if82+=1;
  euphoria+=0;
  comicstrip+=1;
  cruder+=0;


  /* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("filter","blur(0px");
  $("#mouse_interactive").css("-webkit-filter","blur(0px)");
  $(".question").css("font-family","helvetica");
  $("#mouse_interactive").css("border-radius","0");
  $("#mouse_interactive").css("height","200vh");
    $("#mouse_interactive").css("width","80vw");

  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question9").css("display","none");
  setTimeout(function(){$("#question10").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#talent").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=0;
  tschick+=1;
  miumiu+=0;
  if82+=0;
  euphoria+=1;
  comicstrip+=0;
  cruder+=1;



  /* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("filter","blur(0px");
  $("#mouse_interactive").css("-webkit-filter","blur(0px)");
  $(".question").css("font-family","helvetica");
    $("#mouse_interactive").css("border-radius","50% 100%");
     $("#mouse_interactive").css("height","80vh");
    $("#mouse_interactive").css("width","80vw");

  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question9").css("display","none");
  setTimeout(function(){$("#question10").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#tequila").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;


  /* CHANGE MA FORME AINSI */
  $("#point").css("width","30px");
  $("#point").css("height","30px");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question10").css("display","none");
  setTimeout(function(){$("#question11").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#wiskey").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;

 

/* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("filter","blur(50px");
  $("#mouse_interactive").css("-webkit-filter","blur(50px)");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question10").css("display","none");
  setTimeout(function(){$("#question11").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#ambition").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;



  /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("background-color","red");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question11").css("display","none");
  setTimeout(function(){$("#question12").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#mental").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;


  /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("background-color","blue");

  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question11").css("display","none");
  setTimeout(function(){$("#question12").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#dol").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=1;
  tschick+=0;
  miumiu+=1;
  if82+=1;
  euphoria+=0;
  comicstrip+=1;
  cruder+=0;


  /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("background-color","#6e00ff");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question12").css("display","none");
  setTimeout(function(){$("#question13").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#typ").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=0;
  tschick+=1;
  miumiu+=0;
  if82+=0;
  euphoria+=1;
  comicstrip+=0;
  cruder+=1;


  /* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("background-color","yellow");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question12").css("display","none");
  setTimeout(function(){$("#question13").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#fb").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;



  /* CHANGE MA FORME AINSI */

 $("#mouse_interactive").css("filter","blur(50px");
  $("#mouse_interactive").css("-webkit-filter","blur(50px)");

  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question13").css("display","none");
  setTimeout(function(){$("#question14").css("display","flex");}, 1000);

});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#art").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;



  /* CHANGE MA FORME AINSI */
 $("#mouse_interactive").css("filter","blur(50px");
  $("#mouse_interactive").css("-webkit-filter","blur(50px)");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question13").css("display","none");
  setTimeout(function(){$("#question14").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#techy").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=0;
  canvas+=0;
  tschick+=1;
  miumiu+=1;
  if82+=0;
  euphoria+=0;
  comicstrip+=1;
  cruder+=1;


/* CHANGE MA FORME AINSI */
 $("#mouse_interactive").css("width","20vw");
$("#mouse_interactive").css("border-radius","0%");
$("#mouse_interactive").css("height","200vw");


  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question14").css("display","none");
  setTimeout(function(){$("#question15").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#human").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=1;
  tschick+=0;
  miumiu+=0;
  if82+=1;
  euphoria+=1;
  comicstrip+=0;
  cruder+=0;



  /* CHANGE MA FORME AINSI */
$("#mouse_interactive").css("height","160px");
$("#mouse_interactive").css("width","200vw");

  /* FAIS DISPARAITRE LA QUESTION EN COURS POUR AFFICHER LA PROCHAINE  APRÃˆS UNE SECONDE*/
  $("#question14").css("display","none");
  setTimeout(function(){$("#question15").css("display","flex");}, 1000);

});


/* QUAND JE CHOISIS CETTE REPONSE */
$("#running").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
alexv+=1;
  canvas+=0;
  tschick+=1;
  miumiu+=0;
  if82+=0;
  euphoria+=1;
  comicstrip+=0;
  cruder+=1;



  /* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("background-color","white");

  /* FAIS DISPARAITRE LA QUESTION EN COURS */
  $("#question15").css("display","none");


  /* FAIS APPARAITRE LES RESULTATS APRES 3 SECONDES */
  setTimeout(function(){
    resultats();
    $("#resultats").css("display","flex");
  }, 3000);
  
});

/* QUAND JE CHOISIS CETTE REPONSE */
$("#planning").click(function(){

  /* INFLUENCE MES RESULTATS AINSI */
 alexv+=0;
  canvas+=1;
  tschick+=0;
  miumiu+=1;
  if82+=1;
  euphoria+=0;
  comicstrip+=1;
  cruder+=0;



  /* CHANGE MA FORME AINSI */
  $("#mouse_interactive").css("background-color","white");

  /* FAIS DISPARAITRE LA QUESTION EN COURS */
  $("#question15").css("display","none");



  /* FAIS APPARAITRE LES RESULTATS APRES 3 SECONDES */
  setTimeout(function(){
    resultats();
    $("#resultats").css("display","flex");
  }, 3000);
  
});


/* CALCUL DES RÃ‰SULTATS */

function resultats(){

  if (alexv > canvas &&
      alexv > tschick &&
      alexv > miumiu &&
      alexv > if82 &&
      alexv > cruder &&
      alexv > comicstrip &&
      alexv > euphoria) {
    $(".golia").css("display","block");
    $(".bouton1").css("display","block");
    $(".bouton3").css("display","block");
  }

  else if (canvas > tschick &&
      canvas > miumiu &&
      canvas > if82 &&
      canvas > cruder &&
      canvas > euphoria &&
      canvas > comicstrip &&
      canvas > alexv) {
    $(".canvas").css("display","block");
    $(".bouton1").css("display","block");
    $(".bouton3").css("display","block");
  }

  else if (tschick > canvas &&
      tschick > miumiu &&
      tschick > if82 &&
      tschick > cruder &&
      tschick > comicstrip &&
      tschick > euphoria &&
      tschick > alexv) {
    $(".tschik").css("display","block");
    $(".bouton1").css("display","block");
    $(".bouton3").css("display","block");
  }


  else if (miumiu > canvas &&
      miumiu > tschick &&
      miumiu > if82 &&
      miumiu > cruder &&
      miumiu > comicstrip &&
      miumiu > euphoria &&
      miumiu > alexv) {
    $(".miu").css("display","block");
    $(".bouton1").css("display","block");
    $(".bouton3").css("display","block");
  }

  else if (if82 > canvas &&
      if82 > tschick &&
      if82 > miumiu &&
      if82 > cruder &&
      if82 > comicstrip &&
      if82 > euphoria &&
      if82 > alexv) {
    $(".if").css("display","block");
    $(".bouton1").css("display","block");
    $(".bouton3").css("display","block");
  }

  else if (cruder > canvas &&
      cruder > tschick &&
      cruder > miumiu &&
      cruder > if82 &&
      cruder > comicstrip &&
      cruder > euphoria &&
      cruder > alexv) {
    $(".cruder").css("display","block");
    $(".bouton1").css("display","block");
    $(".bouton3").css("display","block");
  }



  else if (comicstrip > canvas &&
      comicstrip > tschick &&
      comicstrip > miumiu &&
      comicstrip > if82 &&
      comicstrip > cruder &&
      comicstrip > euphoria &&
      comicstrip > alexv) {
    $(".comic").css("display","block");
    $(".bouton1").css("display","block");
    $(".bouton3").css("display","block");
  }

  else if (euphoria > canvas &&
      euphoria > tschick &&
      euphoria > miumiu &&
      euphoria > if82 &&
      euphoria > cruder &&
      euphoria > comicstrip &&
      euphoria > alexv) {
    $(".euphoria").css("display","block");
    $(".bouton1").css("display","block");
    $(".bouton3").css("display","block");

  }


}




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();





        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        $(".phrases").css("filter", "blur(10px");
        
        var truc = $(this).attr("href");

        $(truc).css("filter", "blur(0px");

    });
});






