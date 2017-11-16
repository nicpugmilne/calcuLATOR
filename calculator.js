//html class for the calculation is .sum

var calculation = [null, null, null, false]

// var el = document.getElementById("operator"); JS WAY
// el.addEventListener("click", selectButton, false);

// This code makes button presses look pretty
$( document ).ready(function() {
  $( '.operator' ).mousedown(function() {
    $(this).addClass('selected');
  });
  $( '.operator' ).mouseup(function() {
    $(this).removeClass('selected');
  });
  $( '#equals' ).mousedown(function() {
    $(this).addClass('selected');
  });
  $( '#equals' ).mouseup(function() {
    $(this).removeClass('selected');
  });
  $( '.digit' ).mousedown(function() {
    $(this).addClass('selected');
  });
  $( '.digit' ).mouseup(function() {
    $(this).removeClass('selected');
  });
  $( '.digit' ).on("click", function() {
    $(this).text()
    if(calculation[3] === false && calculation[0] === null){
      calculation[0] = $(this).text().trim()
      $('#AC').text('C').attr("id","C")
      $('.sum').text(calculation[0])
    } else if(calculation[3] === false){
        calculation[0] += $(this).text().trim()
        $('.sum').text(calculation[0])
    } else if(calculation[3] === true && calculation[1] === null) {
      calculation[1] = $(this).text().trim()
        $('.sum').text(calculation[1])
        $('#AC').text('C').attr("id","C")
    } else if(calculation[3] === true) {
      calculation[1] += $(this).text().trim()
        $('.sum').text(calculation[1])
        $('#AC').text('C').attr("id","C")
      }
        console.log(calculation)
    });
    $( '#equals' ).on("click", function() {
      var tempCalc = calculation[0] + calculation[2] + calculation[1]
      calculation[0] = eval(tempCalc)
      calculation[1] = null
      calculation[2] = null
      $('.sum').text(calculation[0])
    })
    $( '.operator' ).on("click", function() {
      calculation[3] = true
      if(calculation[2] === null){
        calculation[2] = $(this).text().trim()
          $('.sum').text(calculation[0])
      } else{
        var tempCalc = calculation[0] + calculation[2] + calculation[1]
        calculation[0] = eval(tempCalc)
        calculation[1] = null
        calculation[2] = $(this).text().trim()
        $('.sum').text(calculation[0])
        }
          console.log(calculation)
    })
    $(document).on("click", '#C', function(){
      calculation[1] = null
      console.log(calculation)
      $(this).attr("id", "AC").text("AC")
    })

    $(document).on("click", '#AC', function(){
      calculation = [null, null, null, false]
      console.log(calculation)
      $('.sum').text(0)
    })

    $('#negPos').on('click', function() {
      if(calculation[0] <= 0){
        calculation[0] = Math.abs(calculation[0])
      }else{
        calculation[0] = -Math.abs(calculation[0])
      }
      $('.sum').text(calculation[0])
    })

      $('#percent').on('click', function() {
        if(calculation[2] !== null){
          var tempCalc = calculation[0] + calculation[2] + calculation[1]
          calculation[0] = eval(tempCalc)
          calculation[1] = null
        }
        calculation[0] = calculation[0]/100
        $('.sum').text(calculation[0])
      })
});
