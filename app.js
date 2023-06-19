// const jquery = require("jquery");

// if (typeof jquery == 'undefined'){
//           // console.log('oops! I still have to link my jQuery properly!');
// } else {
//           // console.log('I did it! I linked jQuery and this js file!')
// };

$(() => {
          // made a div with id of container
          const $container = $("#container")
          console.log($container)

          // creating a h1 element
          const $h1 = $("<h1>")
          $h1.text("Hogwarts, the school for wizards")
          console.log($("h1"))
          $("#container").append($h1)

          // creating a h2, h3, and h4 element with some text
          const $h2 = $("<h2>")
          $h2.text("Rahmeesha Reynolds")
          $("#container").append($h2)
          console.log($("h2"))

          const $h3 = $("<h3>")
          $h3.text("Gryffindor")
          $("#container").append($h3)
          console.log($("h3"))


          const $h4 = $(`<h4 class="cat">Eightball</h4>`)
          $("#container").append($h4)
          $("#container").append(`<h4>Holly Wand with Unicorn Hair Core</h4>`)
          console.log($("h4"))



});