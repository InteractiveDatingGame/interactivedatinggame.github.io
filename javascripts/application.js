var resizing;

resizing = function() {
  var height, viewportheight, viewportwidth;
  if (typeof window.innerWidth !== 'undefined') {
    viewportwidth = window.innerWidth;
    viewportheight = window.innerHeight;
  }
  height = viewportheight - 20;
  $('header').css('height', "" + height + "px");
  $('.navigation').css('top', height + 'px')
};

window.addEventListener('resize', function() {
  return resizing();
});

jQuery(function($) {
  resizing();

  $('.quotes').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000
  });

  $('.gallery').slick({
    dots: true
  });

  $('.opener').click(function(){
    $('.navigation').addClass('visible');
  })

  var i, particle, particles, screenWidth, _i;
  screenWidth = $(document).width();
  particles = [];
  for (i = _i = 1; _i <= 50; i = ++_i) {
    particle = {
      x: Math.random() * screenWidth,
      y: Math.random() * 850 + 850,
      vx: Math.random() * 5 - 2.5,
      vy: Math.random() * 1 - 2.5,
      scale: Math.random() * 0.25 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
      dom: $('<div class="particle"></div>')
    };
    particle.dom.css('opacity', particle.opacity);
    $('#particles').append(particle.dom);
    particles.push(particle);
  }
  window.setInterval(function() {
    var _j, _len, _results;
    _results = [];
    for (_j = 0, _len = particles.length; _j < _len; _j++) {
      particle = particles[_j];
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (Math.floor(particle.y) < -100) {
        particle.x = Math.random() * screenWidth;
        particle.y = Math.random() * 850 + 850;
        particle.vx = Math.random() * 5 - 2.5;
        particle.vy = Math.random() * 1 - 2.5;
        particle.scale = Math.random() * 0.25 + 0.5;
        particle.opacity = Math.random() * 0.5 + 0.5;
      }
      particle.dom.css('left', "" + (Math.floor(particle.x)) + "px");
      particle.dom.css('top', "" + (Math.floor(particle.y)) + "px");
      particle.dom.css('opacity', particle.opacity);
      particle.dom.css('-webkit-transform', "scale3d(" + particle.scale + "," + particle.scale + "," + particle.scale + ")");
      _results.push(particle.dom.css('-moz-transform', "scale3d(" + particle.scale + "," + particle.scale + "," + particle.scale + ")"));
    }
    return _results;
  }, 1000 / 50);
});
