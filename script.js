var time = 0;
var interval;

function start() {
  var offset = parseFloat($("#text").val());
  time = offset;
  $("#timer").html(time);

  clearInterval(interval);
  interval = setInterval(tick, 1000);
}

function tick() {
  time += 1;

  $("#timer").html(time);
}
