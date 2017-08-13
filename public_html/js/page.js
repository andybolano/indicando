
	$(document).ready(function() {
            var ancho = $(window).width();
            
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
            });
        });
		


