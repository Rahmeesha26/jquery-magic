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

// creating a h1 element and appending it to the div
          const $h1 = $("<h1>")
          $h1.text("Hogwarts, the school for wizards")
          $("#container").append($h1)

          console.log($("h1"))

// creating a h2 and appending it to the div
          const $h2 = $("<h2>")
          $h2.text("Rahmeesha Reynolds")
          $("#container").append($h2)

          console.log($("h2"))

// creating a h3 and appending it to the div
          const $h3 = $("<h3>")
          $h3.text("Gryffindor")
          $("#container").append($h3)

          console.log($("h3"))

// creating a h4 and appending it to the div
          const $h4 = $(`<h4 class="cat">Eightball</h4>`)
          const $h42 = $(`<h4>Holly Wand with Unicorn Hair Core</h4>`)
          $("#container").append($h4)
          $("#container").append($h42)
          $h42.remove()
          $("#container").append(`<h4 class="wand">Holly Wand Unicorn Hair Core (again)`)
          $(".wand").css("color", "indigo")
          $h4.remove()
          $("#container").after($h4)
          $h4.remove()
          $("#container").append($h4)

          console.log($("<h4>"))

// creating a few li's for the ul 
          $("ul").append(`<li class="secret">invisibility cloak</li>`)
          $("ul").append(`<li class="secret">magic map</li>`)
          $("ul").append(`<li class="secret">time turner</li>`)
          $("ul").append(`<li class="cat">leash</li>`)
          $("ul").append(`<li>Bertie Bott's Every Flavor jelly beans</li>`)
          $("ul").append(`<li id="bb">butter beer</li>`)
          $("#container").append("<ul>")
          $("li").remove("#bb")
          $(".secret").hide('slow').delay(2000)
          $(".secret").show("slow")
          $("ul").prepend(`<li>Butter beer</li>`)

          console.log($("ul"))
          
          
          

});