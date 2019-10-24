$(function() {
  $("#btn1").hover(function() {
    // $("body").blinds(2);
    $("body").css({ "background-image": "url('bedroom.jpg')" });
  });

  $("#btn2").hover(function() {
    $("body")
      .stop()
      .animate({ opacity: 0 }, 1000, function() {
        $("body")
          .css({ "background-image": "url('living1.jpg')" })
          .animate({ opacity: 1 }, { duration: 1000 });
      });
  });
  $("#btn3").hover(function() {
    // $("body").slideDown(5000 );
    $("body").css({ "background-image": "url('bedroom.jpg')" });
  });
  $("#btn4").hover(function() {
    // $("body").slideDown(5000 );
    $("body").css({ "background-image": "url('bathrooom.jpg')" });
  });
  $("#btn5").hover(function() {
    // $("body").slideDown(5000 );
    $("body").css({ "background-image": "url('kitchen.jpg')" });
  });
  $("#close").click(function() {
    $("#planRight").hide();
  });
  $("#floor1").click(function() {
    $("#plan").show();
    $("#planRight").show();
    $("#plan1").hide();
  });
  $("#floor2").click(function() {
    $("#plan").hide();
    $("#planRight").show();
    $("#plan1").show();
  });
});
