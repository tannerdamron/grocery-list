$(document).ready(function(){
  $("form#grocery").submit(function(event){
    event.preventDefault();
    var list = [$("#groceryOne").val(), $("#groceryTwo").val(), $("#groceryThree").val(), $("#groceryFour").val()];
    var sortedList = list.sort();
    var stringList = sortedList.toString();
    var upperList = stringList.toUpperCase();
    var arrayList = upperList.split(",");
    debugger;
    $("ul li:nth-child(1)").text(arrayList[0]);
    $("ul li:nth-child(2)").text(arrayList[1]);
    $("ul li:nth-child(3)").text(arrayList[2]);
    $("ul li:nth-child(4)").text(arrayList[3]);
    $("#hideIt").hide();
  });

});
