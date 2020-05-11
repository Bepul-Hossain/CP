#include <iostream>
using namespace std;
typedef struct node {
      int data;               // will store information
      node *next;             // the reference to the next node
};
void printList(node *traverse) {
    if (traverse != NULL) {
        cout << traverse->data << endl;
            traverse=traverse->next;

    printList(traverse);
    }
}
int main() {
    node *head = NULL;
    for (int i = 0; i < 10; i++) {
        node *newEntry = new node;
        newEntry->data = i;
        newEntry->next = head;
        head = newEntry;
    }
    printList(head);
    return 0;
}
