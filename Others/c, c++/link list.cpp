#include<stdlib.h>
#include<stdio.h>
struct Node
{
   int data;
   struct Node* next;
};

struct Node *head;

void Insert(int data, int n)
{
   Node* temp1 = new Node();
   temp1->data = data;
   temp1->next = NULL;
   if (n == 1){
    temp1->next = head;
    head = temp1;
    return;
   }
   Node* temp2 = new Node();
   for (int i = 0; i < n-2; i++){// i feel like it doesn't even go through this loop
    temp2 = temp2->next;
   }
   temp1->next = temp2->next;
   temp2->next = temp2;
}
void print()
{
    Node* temp = head;
    while(temp != NULL){
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}
int main()
{
    head = NULL; //empty linked list
    Insert(7,1); //List: 7
    Insert(5,2); //List: 7,5
    Insert(8,1); //List: 8,7,5
    Insert(6,2); //List: 8,6,7,5
    print();
system("pause");
}
