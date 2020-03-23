function getLetter(s) {
  let letter;
  if (
    s[0] === "a" ||
    s[0] === "e" ||
    s[0] === "i" ||
    s[0] === "o" ||
    s[0] === "u"
  )
    return "A";
  else if (
    s[0] === "b" ||
    s[0] === "c" ||
    s[0] === "d" ||
    s[0] === "f" ||
    s[0] === "g"
  )
    return "B";
  else if (
    s[0] === "h" ||
    s[0] === "j" ||
    s[0] === "k" ||
    s[0] === "l" ||
    s[0] === "m"
  )
    return "C";
  else {
    return "D";
  }
}
