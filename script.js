
// $("#hover").hover(function(){
//     // hovering 
//     $("#hover").css("background-color", "rgb(137, 159, 237)");
//     // $("#hover").css("transform", "scale(1.1)");
//     // $("#click").css("background-color", "rgb(137, 159, 237)"); // change multiple things at once

// },
// function(){
//     // not hovering
//     $("#hover").css("background-color", "rgb(53, 77, 162)");
// })

// $(function(){
//     $("#drag").draggable();
// })

// var textVal;
// $("#text-input").keyup(function(){
//     textVal = $(this).val();
//     console.log(textVal)
// }) // when you release a key 


// $("#text-input").keydown(function(){

// }) // when you press a key down
$("#search").hide();
$("#back").hide();
$("#Maria").hide();
$("#nav").hide();
$("#test").hide();
$("#navTest").hide();
$("#Isabel").hide();
$("#Daniel").hide();
$("#Shima").hide();
$("#EE").hide();

// -----------------OPTION 1-------------------------- 
// input box that allows for the E key to be pressed. (pro) 
// No error message. too many things to account for (ie, when you hit the backspace to delete the wrong letter, whatever u press next will automatically 'unlock' the pnext page b/c I allowed for "Backspace in the event.key" (con)
// shows user input, even if the incorrect letter is pressed (pro)
// 

// $(document).ready(function () {
//   $("#textE").keydown(function (event) {
//     if (event.key === 'E' | event.key === 'e'){
//     // if (event.key === 'E' | event.key === 'e' | event.key === "Shift" | event.key === "Backspace" | event.key === "CapsLock") {
//       $("#textE").keyup(function () {
//         $("#start").hide();
//         $("#nav").hide();
//         $("#search").show();
//         $("#back").show();
//         $("#test").hide();
//       })
//       // }else{
//       //   alert("Wrong Letter. Try Again");
//       // }
//     }
//   });
// });

// -----------------OPTION 2-------------------------- 
// no input box but keypress that allows for the E key to be pressed. error message when other letter. (pro, better for user intuition)
// when e is pressed an "E" is .show(); before the next section is shown (pro)
// if anything other than e is pressed, the inccorect letter is not shown (con)

document.addEventListener("keypress", function(event) {
  if (event.key === 'E' | event.key === 'e') {
    $("#EE").show();
    setTimeout(function(){
      $("#start").hide();
      $("#nav").hide();
      $("#test").hide();
      $("#search").show();
      $("#back").show();
      window.alert = function() {
        return false;
      }
    }, 600);     
  }else{
    alert('Wrong Letter. Try Again');
  }
})

// -----------------TOGGLE SEARCH-------------------------- 

$("#myInput").click(function(){
    $("#test").toggle();
})

$("#top").click(function(){
  $("#navTest").toggle();
})

// -----------------SEARCH NAV-------------------------- 

$("#DrM ").click(function(){
  $("#Maria").show();
  $("#nav").show();
  $("#test").hide();
  $("#search").hide();
})

$("#DrI").click(function(){
  $("#Isabel").show();
  $("#nav").show();
  $("#test").hide();
  $("#search").hide();
})

$("#DW").click(function(){
  $("#Daniel").show();
  $("#nav").show();
  $("#test").hide();
  $("#search").hide();
})

$("#DrS").click(function(){
  $("#Shima").show();
  $("#nav").show();
  $("#test").hide();
  $("#search").hide();
})

// -------------------TOP SEARCH NAV------------------------ 

$("#DrMtop").click(function(){
  $("#test").hide();
  $("#navTest").hide();
  $("#Isabel").hide();
  $("#Daniel").hide();
  $("#Shima").hide();
  $("#Maria").show();
  $("#nav").show();
})

$("#DrItop").click(function(){
  $("#test").hide();
  $("#navTest").hide();
  $("#Maria").hide();
  $("#Daniel").hide();
  $("#Shima").hide();
  $("#Isabel").show();
  $("#nav").show();
})

$("#DWtop").click(function(){
  $("#test").hide();
  $("#navTest").hide();
  $("#Maria").hide();
  $("#Shima").hide();
  $("#Isabel").hide();
  $("#Daniel").show();
  $("#nav").show();
})

$("#DrStop").click(function(){
  $("#test").hide();
  $("#navTest").hide();
  $("#Maria").hide();
  $("#Isabel").hide();
  $("#Daniel").hide();
  $("#Shima").show();
  $("#nav").show();
})

// -------------------BACK BUTTONS------------------------ 

$("#back").click(function(){
  location.reload();
})

$(".back2").click(function(){
  location.reload();
})

// --------------------TYPE SEARCH----------------------- 
// tutorial from https://www.w3schools.com/howto/howto_js_filter_lists.asp
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function myFunction2(){
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("top");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL2");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}


// --------------------FUNCTIONAL SEARCH----------------------- 
//definitely a foolable functionality that will not account for spelling errors or every variation of the lecturer's name, but for the most part, it works well.

$('#myInput').on('keydown', function (event) {
  if (event.key === 'Enter') {
    const query = $(this).val().toLowerCase(); 
    
    if (query === 'maria' | query === 'dr maria' | query === 'dr m' | query === 'dr mar' | query === 'Dr Maria-Carolina Cambre' | query === 'Cambre' | query === 'Cam' |query === 'mar' ) {
      $("#Maria").show();
      $("#nav").show();
      $("#test").hide();
      $("#search").hide();
    } 
    else if (query === 'isabel' | query === 'dr isabel' | query === 'dr i' | query === 'dr is' | query === 'Dr Isabel Machado' | query === 'Machado' | query === 'Mac' |query === 'is' ) {
      $("#Isabel").show();
      $("#nav").show();
      $("#test").hide();
      $("#search").hide();
    } 
    else if (query === 'daniel' | query === 'daniel' | query === 'dan' | query === 'Daniel Wildberger' | query === 'Wildberger' | query === 'Wil' | query === 'da' ) {
      $("#Daniel").show();
      $("#nav").show();
      $("#test").hide();
      $("#search").hide();
    } 
    else if (query === 'shima' | query === 'dr shima' | query === 'dr s' | query === 'dr sh' | query === 'Dr Shima Rezaei Rashnoodi' | query === 'Rezaei Rashnoodi' |  query === 'Rezaei' | query === 'Rashnoodi' | query === 'sh') {
      $("#Shima").show();
      $("#nav").show();
      $("#test").hide();
      $("#search").hide();
    }
  }
});

$('#top').on('keydown', function (event) {
  if (event.key === 'Enter') {
    const query = $(this).val().toLowerCase(); 

    if (query === 'maria' | query === 'm' |  query === 'dr maria' | query === 'dr m' | query === 'Dr Maria-Carolina Cambre' | query === 'Cambre' | query === 'mar' | query === 'ma' ) {
      $("#test").hide();
      $("#navTest").hide();
      $("#Isabel").hide();
      $("#Daniel").hide();
      $("#Shima").hide();
      $("#Maria").show();
      $("#nav").show();
    } 
    else if (query === 'isabel' | query === 'dr isabel' | query === 'i' | query === 'dr i' | query === 'Dr Isabel Machado' | query === 'Machado' | query === 'is' | query === 'isa') {
        $("#test").hide();
        $("#navTest").hide();
        $("#Maria").hide();
        $("#Daniel").hide();
        $("#Shima").hide();
        $("#Isabel").show();
        $("#nav").show();
    } 
    else if (query === 'daniel' | query === 'd' | query === 'dan' | query === 'Daniel Wildberger' | query === 'Wildberger' | query === 'da' ) {
      $("#test").hide();
      $("#navTest").hide();
      $("#Maria").hide();
      $("#Shima").hide();
      $("#Isabel").hide();
      $("#Daniel").show();
      $("#nav").show();
    } 
    else if (query === 'shima' | query === 'dr shima' | query === 's' | query === 'dr s' | query === 'Dr Shima Rezaei Rashnoodi' | query === 'Rezaei Rashnoodi' |  query === 'Rezaei' | query === 'Rashnoodi' | query === 'sh' | query === 'shi') {
      $("#test").hide();
      $("#navTest").hide();
      $("#Maria").hide();
      $("#Isabel").hide();
      $("#Daniel").hide();
      $("#Shima").show();
      $("#nav").show();
    }
    $(this).val('');
  }
});
