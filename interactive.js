var nameSubField = $('.nameSubField');
var nsBtn = $('.nameSubBtn');
var pH1 = $('.pH1');
var pP1 = $('.pP1');

nsBtn.on("click", updateHeader);

function updateHeader() {
  var name = nameSubField.val();
  pH1.text(`${name}, sometimes you just gotta relax and have some fun`);
  pP1.text("Below, we've compiled some things you can do to unwind and leave the burnout in the dust");
}