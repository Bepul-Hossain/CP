var midBtn = document.getElementById("btn5");
midBtn.addEventListener("click", function () {
  var currVals = getCurrVals();
  for (var i = 1; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    prev = iConverter(i);
    prevBtnNum = currVals[prev - 1];
    document.getElementById("btn" + i).innerHTML = prevBtnNum;
  }
});
function iConverter(i) {
  if (i <= 3) {
    if (i === 1) {
      return 4;
    }
    return i - 1;
  } else if (i <= 6) {
    if (i === 4) {
      return 7;
    }
    return 3;
  } else {
    if (i === 9) {
      return 6;
    }
    return i + 1;
  }
}

function getCurrVals() {
  var vals = [];
  for (var i = 1; i < 10; i++) {
    vals.push(document.getElementById("btn" + i).innerHTML);
  }
  return vals;
}
