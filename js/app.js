$(document).ready(function(){

  $(".but").click(function(){
        	$(this).toggleClass("butj")
        });


  $(".hea").click(function(){
   
  

    if(window.confirm("Do you wanna adopt me?")){
      window.alert("Thanks you hooman!")
    }else{
      window.alert("Thanks for your donation hooman...")
    }
  })

  // Start Doctor Section

  $(window).scroll(function(){
    let xyz = $(this).scrollTop();
   
    if(xyz >= 3200){
     $(".dtops").addClass("dtop");
     $(".dp1s").addClass('dp1');
     $(".dp2s").addClass('dp2');
     $(".dp3s").addClass('dp3');
     $(".btds").addClass("btd");
    }else{
      $(".dtops").removeClass("dtop");
      $(".dp1s").removeClass('dp1');
      $(".dp2s").removeClass('dp2');
      $(".dp3s").removeClass('dp3');
      $(".btds").removeClass("btd");
    }
  })

   $(window).scroll(function(){
    let xyz1 = $(this).scrollTop();
  // console.log(xyz1)
    if(xyz1 >= 4000){
     $(".docm").addClass("doc");
     $(".doc1s").addClass('doc1');
     $(".doc2s").addClass('doc2');
     $(".doc3s").addClass('doc3');
     $(".btdds").addClass("btdd");
    }else{
     $(".docm").removeClass("doc");
     $(".doc1s").removeClass('doc1');
     $(".doc2s").removeClass('doc2');
     $(".doc3s").removeClass('doc3');
     $(".btdds").removeClass("btdd");
    }
  })

  // End Doctor Section




// Start Access Section
    
    var min = 0;
    const result = $("#result");
    var result1 = $("#result1");
    var result2 = $("#result2");
    var result3 = $("#result3");


    $("#incr").click(function(){
     min += 1;
   result.text(min)
    });

     $("#incr1").click(function(){
     min += 1;
      result1.text(min)
    });

      $("#incr2").click(function(){
     min += 1;
      result2.text(min)
    });

        $("#incr3").click(function(){
     min += 1;
      result3.text(min)
    });

    $("#dec").click(function(){
       if(min === 0){
         min += 0
       }else{
         min -= 1
       }
       result.text(min)
    })  ;

      $("#dec1").click(function(){
       if(min === 0){
         min += 0
       }else{
         min -= 1
       }        
       result1.text(min)
    })  ;

       $("#dec2").click(function(){
       if(min === 0){
         min += 0
       }else{
         min -= 1
       }        
       result2.text(min)
    })  ;

         $("#dec3").click(function(){
       if(min === 0){
         min += 0
       }else{
         min -= 1
       }        
       result3.text(min)
    })  ;

     //console.log(result.text());

    $("#ord1").click(function(){
      $("#medi1").text(result.text());

     });

   

    $("#ord2").click(function(){
       $("#medi2").text(result1.text());
     })

      $("#ord3").click(function(){
      $("#medi3").text(result2.text());
     })


     $("#ord4").click(function(){
      $("#medi4").text(result3.text());
     });

    
  var gettitle = document.getElementsByClassName("acctitle ");
  var getcontent = document.querySelectorAll(".accontent");

  for(var i=0;i<gettitle.length;i++){

     gettitle[i].addEventListener("click",function(e){

       this.classList.toggle("act");
       var content = this.nextElementSibling;

       if(content.style.height){
        content.style.height = null;
       }else{
       // console.log('hello')
        //console.log(getcontent.scrollHeight)
        content.style.height = content.scrollHeight + "px";
       }

     })
  }

 












    })



   
// End Access Section