 $(document).ready(function() {
   $("#street").click(function() {
     $.getJSON("data/street.json", function(result) {
       $.each(result, function(i, field) {
         var entry = field[Math.floor(Math.random() * field.length)];
         console.log(entry);
         $("#assign").text( entry.name);
         $("#image").attr("src", entry.img);
       });
     });
   });
 });



 $(document).ready(function() {
   $("#landscape").click(function() {
     $.getJSON("data/landscape.json", function(result) {
       $.each(result, function(i, field) {
         var entry = field[Math.floor(Math.random() * field.length)];
         console.log(entry);
         $("#assign").text( entry.name);
         $("#image").attr("src", entry.img);
       });
     });
   });
 });



 $(document).ready(function() {
   $("#studio").click(function() {
     $.getJSON("data/studio.json", function(result) {
       $.each(result, function(i, field) {
         var entry = field[Math.floor(Math.random() * field.length)];
         console.log(entry);
         $("#assign").text( entry.name);
         $("#image").attr("src", entry.img);
       });
     });
   });
 });



 $(document).ready(function(){

   $('#button1').click(function(){
    //window.location.href='index.html';
    var location = $("#geoInput").val();

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&appid=cd14bf7d4f67e4d47694971e981d716c", function(data){
        console.log(data)
        console.log(data.main.temp_min)
        console.log(data.main.temp_max)
        console.log(data.weather.main)
      $("#weatherTemp").text("It is currently "+data.main.temp+" degrees");
      $("#weatherCon").text("There will be "+data.weather[0].description);
    });
 })
})
