    $(document).ready(function(){

          /*Mouse Events*/

          $('h1').click(function(){
            alert("Best Freelancing Training Center!!!");
          });
           $('h2').dblclick(function(){
            alert("Best Freelancing Training Center!!!");
          });
           $('h3').mouseleave(function(){
            alert("Best Freelancing Training Center!!!");
          });
           $('h4').hover(function(){
            alert("Best Freelancing Training Center!!!");
          });

          /*Slide Up and Down*/
          
          $('.container').click(function(){
            $('.panel').slideUp();

          });
          $('.container1').click(function(){
            $('.panel').slideDown();

          });
          $('.container2').click(function(){
            $('.panel3').slideToggle();

          });

          /*Fade out and in*/
          
          $('.btn1').click(function(){
            $('p').fadeOut(1000, 'linear');
          });
          $('.btn2').click(function(){
            $('p').fadeIn(1000);
          });
          $('.btn3').click(function(){
            $('p').fadeToggle("slow");
          });
          $('.btn4').click(function(){
            $('p').fadeTo(1000, .5);
          });


        });