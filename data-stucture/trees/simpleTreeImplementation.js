class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendants = [];
    }
}
//create nodes with values

const abc = new TreeNode("Abc");
const homer = new TreeNode("homer");
const bart = new TreeNode("bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("maggie");
// associate node with it's descendants 

abc.descendants.push(homer);
homer.descendants.push(bart, lisa, maggie);
// console.log(abc, null, 4);
console.dir(abc, { depth: null, colors: true, maxArrayLength: null });