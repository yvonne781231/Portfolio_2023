(function ($){
    

    $.fn.cardEvent = function () {

        // 憭抵釵�彍摮㛖蕃��峕葫閰�
        $('.number_card').click(function(){
          // console.log($(this));
          var dad = $(this).closest('.number_card');
          dad.find('.card_cover').toggleClass('flip');
          dad.find('.card_content').toggleClass('flip');
          // dad.find('.card_content_mb').toggleClass('flip_mb');
          // alert("test")

          var mb_num = $(this).index();


          $('.card_content_mb').eq(mb_num).toggleClass('flip_mb');
            // console.log(mb_num)
        });

        $('.card_content_mb').click(function(){
            $(this).toggleClass('flip_mb');
            // $('card_content_mb').toggleClass('flip_mb');
            $('.card_cover').removeClass('flip');
        })


        // ��𧢲�毺���墧�𠹺遙銝��� select 嚗𣬚蕃��屸�賣���滨蔭
        $('.select_input').click(function(){
            $('.card_content_mb').removeClass('flip_mb');
            $('.card_cover').removeClass('flip');
            $('.card_content').removeClass('flip');
        })

        $(".number_card li").click(function(){
           $(".number_card li").removeClass('flip');
           $(this).addClass('flip');
        })

        $("#check").click(function(){
          $('.card_content_mb').removeClass('flip_mb');
          $('.card_cover').removeClass('flip');
          $('.card_content').removeClass('flip');
          var num_1 = parseInt($( "#num_1" ).val());
          var num1_txt = num_1.toString();
          var num_1_a =  parseInt(num1_txt.substr(0,1));
          var num_1_b =  parseInt(num1_txt.substr(1,1));
          var num_1_c =  parseInt(num1_txt.substr(2,1));
          var num_1_d =  parseInt(num1_txt.substr(3,4));
          var num_1_tal = num_1_a+num_1_b+num_1_c+num_1_d
          // console.log(num_1_tal)
          var num_2 = parseInt($( "#num_2" ).val());
          var num_3 = parseInt($( "#num_3" ).val());
          var tol = String(num_1_tal+num_2+num_3)

          if(tol<10){
            tol=0+tol
          }
          console.log(tol)
          
          var final = tol.toString();
          var num_tol_a =  parseInt(final.substr(0,1));
          var num_tol_b =  parseInt(final.substr(1,2));
          var life_num = num_tol_a+num_tol_b

          console.log("life_num : "+life_num)
          
          if($("#num_1").val()==2000){
            life_num += 5;
            // console.log(life_num)
          }
          if(life_num>9){
            // �ế�𪃾��匧嗾�见�𦯀葡嚗�之�䲰2�衤�滚��嚗�停�銁頧匧��
            var life_txt = life_num.toString();

            var life_txt_a =  parseInt(life_txt.substr(0,1));
            var life_txt_b =  parseInt(life_txt.substr(1,2));

            var life_sub = life_txt_a+life_txt_b;

            $( "#final_num" ).eq(0).text( life_sub );
            // $(".list li").eq(life_sub-1).show()
            $(".card_cover").eq(life_sub-1).trigger("click");
            }else{
              $( "#final_num" ).eq(0).text( life_num );
              // $(".list li").eq(life_num-1).show()
              $(".card_cover").eq(life_num-1).trigger("click");
            }
            console.log(life_sub)
          });


        document.querySelectorAll('.scene').forEach((elem) => {
    
            const modifier = elem.getAttribute('data-modifier')
            
            basicScroll.create({
                elem: elem,
                from: 0,
                to: 800,
                direct: true,
                props: {
                    '--translateY': {
                        from: '0',
                        to: `${ 10 * modifier }px`
                    }
                }
            }).start()
                
        })

    }

        
    $.fn.CardInIt = function () {
        // $.Body.MouseTrack();
        $.Body.cardEvent();
    }
    

    $.fn.ComCss = function (property) {
        propObj = {};
        for(x in property){ 
            propObj['-webkit-'+x] = property[x];
            propObj['-moz-'+x] = property[x];
            propObj['-ms-'+x] = property[x];
            propObj[x] = property[x];
        }
        $(this).css(propObj);
        propObj = null;
        delete propObj;
    }

})(jQuery);
    
$(function(){
    $.Body =$('body');  
    $.Window = $(window);
    $.Loading = $.Body.find('div#loading');
    // $.icon_ani = $.Body.find('.icon_ani');
    // $.header = $.Body.find('div.header');
    // $.header.load('nav.html',function(){
    //     $.Body.CardInIt();
    //     if(window.location.href.indexOf('trial')==-1){
    //         $('.sub_1').click(function(){
    //             window.location.href="trial.html#sub_1";
    //         })
    //     }
    // });
    // window.scrollTo(0, 1);
    $.Window.load(function(){
        $.Loading.fadeOut(600);
        $.Body.CardInIt();
        // $.Window.trigger('resize');
        
    });
});