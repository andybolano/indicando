 window.addEventListener('DOMContentLoaded', function () {
                        "use strict";
                        var ql = new QueryLoader2(document.querySelector("body"), {
                            barColor: "#9BB9B7",
                            backgroundColor: "#BD4539",
                            percentage: true,
                            barHeight: 1,
                            minimumTime: 200,
                            fadeOutTime: 1000
                        });
                    });
	$(document).ready(function() {
            $('#loading').hide();
             new WOW().init();
            var ancho = $(window).width();
            
             var $logo = $('#logo_home');
           TweenLite.to($logo, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});
             
              var $left = $('#left_home');
              TweenLite.from($left, 2, {x: '100px', autoAlpha: 0});
                        
            if(ancho < 500){
                $('#p').hide();
                $('#p-slide').show();
                 setTimeout(function(){
                     $('.flexslider').flexslider({
                      animation: "slide",
                      start: function (slider) {
                                $('.flex-direction-nav').css({visibility: 'hidden'});
                            }
                    });
                     },100);
            }else{
                $('#p').show();
                $('#p-slide').hide();
            }
            $('#fullpage').fullpage({
              sectionsColor: ['#FFF', '#E74135', '#92C1BE', '#FFF', '#E74135', '#dedede'],
              anchors: ['home','quienessomos', 'quehacemos', 'productos', 'equipo', 'contacto'],
              menu: '#menu',
              'verticalCentered':false,
              'navigation': true,
              
		'navigationPosition': 'left',
                
                onLeave: function(index, nextIndex, direction){
		var leavingSection = $(this);
		if(nextIndex == 1){
			 var $logo = $('#logo_home');
                        TweenLite.from($logo, 2, {y: '-=100px', autoAlpha: 0});
                        
                        var $left = $('#left_home');
                        TweenLite.from($left, 2, {x: '100px', autoAlpha: 0});
                        
		}
                
                if(nextIndex == 3){
                 animate_scene_3();
                }

                }
            });
        });
        
        function animate_scene_3(){
                $('#cube').addClass('animate-svg');
        }
		


