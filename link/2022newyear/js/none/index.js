(function ($){
    

    $.fn.aniEvent = function () {

        $.Body.on('click','.nav__trigger',function(e){
            var _self = $(this);
            switch(true){
                case (_self.hasClass('nav__trigger')):
                    $('.line_0').toggleClass('line_0_ani');
                    $('.line_1').toggleClass('line_1_ani');
                    $('.line_2').toggleClass('line_2_ani');
                    $('.nav__list').toggleClass('nav__toogle');
                break;
            }
        });

        $('.nav__item').click(function(){
            $('.line_0').toggleClass('line_0_ani');
            $('.line_1').toggleClass('line_1_ani');
            $('.line_2').toggleClass('line_2_ani');
            $('.nav__list').toggleClass('nav__toogle');
        });

        // $('.class__toggle--btn').click(
        //     function(){//:hidden 匹配所有的不可見元素，input元素的type屬性為"hidden"的話也會被匹配到
        //         if ($(this).next().is(":hidden")){//next是下一層;is() 根據選擇器、元素或jQuery 對象來檢測匹配元素集合(代表一種狀態)；例如 is(":checked") 或 is(":animated")
        //             $('.class__toggle div:nth-of-type(2)').removeClass('class__toggle_ani');
        //             $(this).find('.class__toggle div:nth-of-type(2)').addClass('class__toggle_ani');
        //             $(this).next().slideDown(function(){               
        //             });
        //             $('.class__list').not($(this).next('.class__list')).slideUp(300);
        //             // $('.list_arrow').not($(this).find('.list_arrow')).transition({ rotate: '0deg' });  
        //         }else{
        //             $(this).find('.class__toggle div:nth-of-type(2)').removeClass('class__toggle_ani');
        //             $(this).next().slideUp(300);
        //         }        
        //     }
        // );


    }

    $.fn.scrollEvent = function () {

        $(window).scroll(toScroll);
        // toScroll();

        function toScroll(){
            var pageTop = $(document).scrollTop()
            var pageBottom = pageTop + $(window).height()
            // var pageBottom = pageTop + $.Body.height()
            // console.log(pageBottom)
            var tags = $(".js-fadein-down")

            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i]

                if ($(tag).offset().top < pageBottom) {
                  $(tag).addClass("js-fadein-down--active")
                } else {
                  $(tag).removeClass("js-fadein-down--active")
                }
            }

            var tags = $(".js-fadein-up")

            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i]

                if ($(tag).offset().top < pageBottom) {
                  $(tag).addClass("js-fadein-up--active")
                } else {
                  $(tag).removeClass("js-fadein-up--active")
                }
            }

            var tags = $(".js-fadein-left")

            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i]

                if ($(tag).offset().top < pageBottom) {
                  $(tag).addClass("js-fadein-left--active")
                } else {
                  $(tag).removeClass("js-fadein-left--active")
                }
            }

            var tags = $(".js-fadein-right")

            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i]

                if ($(tag).offset().top < pageBottom) {
                  $(tag).addClass("js-fadein-right--active")
                } else {
                  $(tag).removeClass("js-fadein-right--active")
                }
            }

        }//toScroll()--end

    }
        
    $.fn.EventInIt = function () {
        // $.Body.MouseTrack();
        $.Body.aniEvent();
        $.Body.scrollEvent();
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
    //     $.Body.EventInIt();
    //     if(window.location.href.indexOf('trial')==-1){
    //         $('.sub_1').click(function(){
    //             window.location.href="trial.html#sub_1";
    //         })
    //     }
    // });
    // window.scrollTo(0, 1);
    $.Window.load(function(){
        $.Loading.fadeOut(600);
        $.Body.EventInIt();
        // $.Window.trigger('resize');
        
    });
});

