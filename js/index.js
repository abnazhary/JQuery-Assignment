$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
    
})
$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0'},0)
})







$("#sliderDown h3").click(function(){
    $(this).next().slideToggle()

    $("#sliderDown div").not($(this).next()).slideUp()
})









/*counter*/


window.onload = function() {
   
    countDownToTime("20 February 2025 9:30:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }



















$("textarea").keyup(function(){
    let lengthChar = $(this).val().length

    $("#chars").text(
        100 - lengthChar <= 0 ? "your available character finished" : 100 - lengthChar
    )
})