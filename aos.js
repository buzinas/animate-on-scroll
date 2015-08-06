(function() {
  this.AoS = (function() {
    function AoS(options) {
      this.useClass = ".aos";
      this.offset = 0;
      
      if (options) {
        this.useClass = options.useClass || this.useClass;
        this.offset = options.offset || this.offset;
      }
    }
    
    AoS.prototype.init = function() {
      var els = document.querySelectorAll(this.useClass);
      Array.prototype.forEach.call(els, function(el, i){
        el.style.visibility = "hidden";
      });
      document.addEventListener("scroll", this._tryScroll.bind(this));
    };
    
    AoS.prototype._tryScroll = function() {
      var els = document.querySelectorAll(this.useClass);
      
      Array.prototype.forEach.call(els, function(el, i) {
        if (el.getBoundingClientRect().top - window.innerHeight*0.8 <= this.offset) {
          el.style.visibility = "visible";
          el.classList.add("animated", el.getAttribute("data-animation") || "fadeIn");
        }
      }.bind(this));
    };
    
    return AoS;
  })();
}).call(this);
