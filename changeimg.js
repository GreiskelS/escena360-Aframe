AFRAME.registerComponent('change-img', {
    schema: {
      img: { type: 'string' }
    },
  
    init: function () {
        var data = this.data;
        var el = this.el;

      el.addEventListener("mouseenter", function() {
        var mySky = document.querySelector("#sky");
        mySky.setAttribute("src", data.img);
      });
    }
  });