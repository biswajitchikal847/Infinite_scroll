var scrool_div = document.getElementById("scrool_div");


var nextItem = 1;
var getData = function() {
  for (var i = 0; i < 25; i++) {
    var item = document.createElement('p');
    item.innerText = 'Masai Student ' + nextItem++;
    scrool_div.appendChild(item);
  }
}


scrool_div.addEventListener('scroll', function() {
  if (scrool_div.scrollTop + scrool_div.clientHeight >= scrool_div.scrollHeight) {
    getData();
  }
});


getData();


