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


        //load footer
        $('.section_footer').load('https://www.dada-master.com/dadamaster_public/event/footer.html?v=20200226');
        $('.leadermonthLink').load('https://www.dada-master.com/dadamaster_public/event/leadermonth/leadermonth_link.html');

        //看不懂這串是幹嘛，先放著
        $('.nav__list a[href^="#"],.Info a[href^="#"]').on('click', function (e) {
             e.preventDefault();
             $('.nav__link').each(function () {
                 $(this).parent().removeClass('nav__item--current');
                 // $('.nav__list').toggleClass('nav__toogle');
             })
             $(this).parent(e).addClass('nav__item--current');
        });


        // scroll超過Sec51加上Fixed
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('.nav__list a[href^="#"],.Info a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash,
                menu = target;

            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 70
            }, 500, 'swing', function () {
                //temp persuasive code
                console.log(target);
                if (target == '#section-feature') {
                    jumpupNumbers();
                }
                console.log(target);

                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });


        function onScroll(event) {
            var scrollPos = $(document).scrollTop() + 250;
            $('.nav__list li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement
                    .height() >
                    scrollPos) {
                    $('.nav__list li').removeClass("nav__item--current");
                    currLink.parent().addClass("nav__item--current");
                } else {
                    currLink.parent().removeClass("nav__item--current");
                }
            });

            //Sec5加上Fixed
            if (scrollPos >= $('#section-feature').position().top && (scrollPos - 250 + $(window).height()) <= $('#Sec51').position().top) {
                $('#buy-last').addClass("buy--fixed");
            }
            else
                $('#buy-last').removeClass("buy--fixed");
        }


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

