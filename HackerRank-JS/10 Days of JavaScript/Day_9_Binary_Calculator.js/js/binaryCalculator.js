window.onload = () => {
  const btn0 = document.getElementById("btn0");
  const btn1 = document.getElementById("btn1");
  const btnClr = document.getElementById("btnClr");
  const btnEql = document.getElementById("btnEql");
  const btnSum = document.getElementById("btnSum");
  const btnSub = document.getElementById("btnSub");
  const btnMul = document.getElementById("btnMul");
  const btnDiv = document.getElementById("btnDiv");
  const res = document.getElementById("res");

  btn0.onclick = () => {
    res.innerHTML += "0";
  };
  btn1.onclick = () => {
    res.innerHTML += "1";
  };
  btnClr.onclick = () => {
    res.innerHTML = "";
  };
  btnSum.onclick = () => {
    res.innerHTML += "+";
  };
  btnSub.onclick = () => {
    res.innerHTML += "-";
  };
  btnMul.onclick = () => {
    res.innerHTML += "*";
  };
  btnDiv.onclick = () => {
    res.innerHTML += "/";
  };

  btnEql.onclick = () => {
    res.innerHTML = evaluate(res.innerHTML);
  };

  function evaluate(str) {
    if (str.indexOf("+") > -1) {
      const operators = str.split("+");
      const op1 = parseInt(operators[0], 2);
      const op2 = parseInt(operators[1], 2);
      return (op1 + op2).toString(2);
    }
    if (str.indexOf("-") > -1) {
      const operators = str.split("-");
      const op1 = parseInt(operators[0], 2);
      const op2 = parseInt(operators[1], 2);
      return (op1 - op2).toString(2);
    }
    if (str.indexOf("/") > -1) {
      const operators = str.split("/");
      const op1 = parseInt(operators[0], 2);
      const op2 = parseInt(operators[1], 2);
      return (op1 / op2).toString(2);
    }
    if (str.indexOf("*") > -1) {
      const operators = str.split("*");
      const op1 = parseInt(operators[0], 2);
      const op2 = parseInt(operators[1], 2);
      return (op1 * op2).toString(2);
    }
    return "";
  }
};
