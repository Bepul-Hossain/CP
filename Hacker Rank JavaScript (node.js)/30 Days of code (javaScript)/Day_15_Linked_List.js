process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}
function Node(data) {
  this.data = data;
  // console.log("this.data = "+this.data);
  this.next = null;
  // console.log("this.next = "+this.next);
}
function Solution() {
  this.insert = function (head, data) {
    //complete this method
    //this.display({ data: data });
    if (head == null) {
      //  console.log('ok');
      return new Node(data);
    }
    var ptr = head;
    while (ptr.next != null) {
      ptr = ptr.next;
      //console.log('okk');
    }
    // console.log('okkk');
    ptr.next = new Node(data);
    //console.log("head = "+head.data);
    return head;
  };

  this.display = function (head) {
    var start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}
function main() {
  var T = parseInt(readLine());
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < T; i++) {
    var data = parseInt(readLine());
    //console.log("head = "+head);
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}
