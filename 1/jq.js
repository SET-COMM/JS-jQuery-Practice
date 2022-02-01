function createDiv() {
    $(document).ready(function () {
      var test = {
        id: "div",
        class: "divclass",
        css: {
          "color": "White",
          "background-color": "Black",
          "font-size":"3em"
        }
      };
      var $div = $("<div>", test);
      $div.html("New div tag created");
      $("body").append($div);
    });
  }