(function(d) {
  var els;
  
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
        el.style.visibility = 'visible';
        el.classList.add('animated', el.getAttribute('aos'));
      }
    });
  }
  
  loaded(init);
})(document);
