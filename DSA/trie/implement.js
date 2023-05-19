// https://stackfull.dev/trie-in-javascript-the-data-structure-behind-autocomplete
// https://www.youtube.com/watch?v=Sc80DNJfQs0&ab_channel=QuestionableCoding

function createNode() {
    return {
        children: {},
        isWordEnd: false
    }
}

class Trie {
    constructor() {
        this.root = new createNode();
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if (!(charToInsert in curr.children)) {
                curr.children[charToInsert] = new createNode();
            }
            curr = curr.children[charToInsert]
        }
        curr.isWordEnd = true;
    }
    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let charToFind = word[i];
            if (!(charToFind in curr.children)) {
                return false;
            }
            curr = curr.children[charToFind];
        }
        return curr.isWordEnd;
    }
    startsWithPrefix(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i];
            if (!(charToFind in curr.children)) {
                return false;
            }
            curr = curr.children[charToFind];
        }
        return true;
    }
}
let trie = new Trie();
trie.insert("CAT");
trie.insert("DOG");


console.log(trie.search("MAT"));
console.log(trie.search("DOG"));
console.log(trie);