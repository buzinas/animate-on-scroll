(function(d) {
  var els, animations = ['bounce','flash','pulse','rubberBand','shake','swing','tada','wobble','jello','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig','flip','flipInX','flipInY','lightSpeedIn','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','slideInUp','slideInDown','slideInLeft','slideInRight','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp','rollIn'];
  
  function loaded(cb) {
    d.readyState === 'complete' ? cb() : d.addEventListener('DOMContentLoaded', cb);
  }
  
  function init() {
    els = [].slice.call(d.querySelectorAll('[aos]'));
    hideAll();
    visibleOnScroll();
    d.addEventListener('scroll', visibleOnScroll);
  }
  
  function hideAll() {
    els.forEach(function(el, i) {
      el.style.visibility = 'hidden';
    });
  }
  
  function visibleOnScroll() {
    els.forEach(function(el, i) {
      if (el.style.visibility === 'hidden' && el.getBoundingClientRect().top - window.innerHeight * 0.8 <= 0) {
        var attr = el.getAttribute('aos');
        el.style.visibility = 'visible';
        el.classList.add('animated', attr === 'random' ? animations[Math.floor(Math.random() * animations.length)] : attr);
      }
    });
  }
  
  loaded(init);
})(document);
