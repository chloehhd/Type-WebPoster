

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

// $("#myInput").click(function(){
//     $("#test").toggle();
// })

$("#myInput").hover(function () {
  $("#test").show();
},
  function () {
    $("#test").hide();
  }
)

// $("#top").click(function(){
//   $("#navTest").toggle();
// })

$("#top").hover(function () {
  $("#navTest").show();
},
  function () {
    $("#navTest").hide();
  }
)

// -------------------BACK BUTTONS------------------------ 

$("#back").click(function(){
  location.reload();
})

$(".back2").click(function(){
  location.reload();
})

// --------------------TYPE SEARCH----------------------- 
// tutorial from https://www.w3schools.com/howto/howto_js_filter_lists.asp

// I understand your reasoning for not showing the list of options because a user might be more inclided to click on the option rather than type it out. 
// However... if this were something for the ocad website, how would anyone know what to search if I didn't show them the options?

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
      $(this).val('');
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
      $(this).val('');
  }
}


// --------------------FUNCTIONAL SEARCH----------------------- 
// definitely a foolable functionality that will not account for spelling errors or every variation of the lecturer's name, but for the most part, it works well.

$('#myInput').on('keydown', function (event) {
  if (event.key === 'Enter') {
    const query = $(this).val().toLowerCase(); 

    if (query === 'maria' | query === 'dr maria' | query === 'dr m' | query === 'dr ma' |query === 'dr mar' | query === 'Dr Maria-Carolina Cambre' | query === 'Dr Maria Carolina Cambre'| query === 'Cambre' | query === 'Cam' |query === 'mar'  ) {
      $("#Maria").show();
      $("#nav").show();
      $("#test").hide();
      $("#search").hide();
      $("#navTest").hide();
      $("#Isabel").hide();
      $("#Daniel").hide();
      $("#Shima").hide();
      $("#Swords").hide();
      $("#Sglass").hide();
    } 
    else if (query === 'isabel' | query === 'dr isabel' | query === 'dr i' | query === 'dr is' | query === 'dr isa' |  query === 'Dr Isabel Machado' | query === 'Machado' | query === 'Mac' |query === 'is'  ) {
      $("#Isabel").show();
      $("#nav").show();
      $("#test").hide();
      $("#search").hide();
      $("#navTest").hide();
      $("#Maria").hide();
      $("#Daniel").hide();
      $("#Shima").hide();
      $("#Swords").hide();
      $("#Sglass").hide();
    } 
    else if (query === 'daniel' | query === 'daniel' | query === 'dan' | query === 'Daniel Wildberger' | query === 'Wildberger' | query === 'Wil' | query === 'da' ) {
      $("#Daniel").show();
      $("#nav").show();
      $("#test").hide();
      $("#search").hide();
      $("#navTest").hide();
      $("#Maria").hide();
      $("#Isabel").hide();
      $("#Shima").hide();
      $("#Swords").hide();
      $("#Sglass").hide();
    } 
    else if (query === 'shima' | query === 'dr shima' | query === 'dr s' | query === 'dr sh' | query === 'dr shi' |query === 'Dr Shima Rezaei Rashnoodi' | query === 'Rezaei Rashnoodi' |  query === 'Rezaei' | query === 'Rashnoodi' | query === 'sh'  ) {
      $("#Shima").show();
      $("#nav").show();
      $("#test").hide();
      $("#search").hide();
      $("#navTest").hide();
      $("#Maria").hide();
      $("#Isabel").hide();
      $("#Daniel").hide();
      $("#Swords").hide();
      $("#Sglass").hide();
    }
    $(this).val('');
  }
});

$('#top').on('keydown', function (event) {
  if (event.key === 'Enter') {
    const query = $(this).val().toLowerCase(); 

    if (query === 'maria' | query === 'dr maria' | query === 'dr m' | query === 'dr ma' |query === 'dr mar' | query === 'Dr Maria-Carolina Cambre' | query === 'Cambre' | query === 'Cam' |query === 'mar'  ) {
      $("#test").hide();
      $("#navTest").hide();
      $("#Isabel").hide();
      $("#Daniel").hide();
      $("#Shima").hide();
      $("#search").hide();
      $("#Swords").hide();
      $("#Sglass").hide();
      $("#Maria").show();
      $("#nav").show();
    } 
    else if (query === 'isabel' | query === 'dr isabel' | query === 'dr i' | query === 'dr is' | query === 'dr isa' |  query === 'Dr Isabel Machado' | query === 'Machado' | query === 'Mac' |query === 'is' ) {
      $("#test").hide();
        $("#navTest").hide();
        $("#Maria").hide();
        $("#Daniel").hide();
        $("#Shima").hide();
        $("#search").hide();
        $("#Swords").hide();
        $("#Sglass").hide();
        $("#Isabel").show();
        $("#nav").show();
    } 
    else if (query === 'daniel' | query === 'daniel' | query === 'dan' | query === 'Daniel Wildberger' | query === 'Wildberger' | query === 'Wil' | query === 'da' ) {
      $("#test").hide();
      $("#navTest").hide();
      $("#Maria").hide();
      $("#Shima").hide();
      $("#Isabel").hide();
      $("#search").hide();
      $("#Swords").hide();
      $("#Sglass").hide();
      $("#Daniel").show();
      $("#nav").show();
    } 
    else if (query === 'shima' | query === 'dr shima' | query === 'dr s' | query === 'dr sh' | query === 'dr shi' |query === 'Dr Shima Rezaei Rashnoodi' | query === 'Rezaei Rashnoodi' |  query === 'Rezaei' | query === 'Rashnoodi' | query === 'sh') {
      $("#test").hide();
      $("#navTest").hide();
      $("#Maria").hide();
      $("#Isabel").hide();
      $("#Daniel").hide();
      $("#search").hide();
      $("#Swords").hide();
      $("#Sglass").hide();
      $("#Shima").show();
      $("#nav").show();
    }
    $(this).val('');
  }
});


$(function(){
    $("#mariaPic").draggable();
    $("#isabelPic").draggable();
    $("#danielPic").draggable();
    $("#shimaPic").draggable();
})
