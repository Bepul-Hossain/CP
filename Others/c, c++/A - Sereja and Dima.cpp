#include<iostream>
using namespace std;

int main()
{
      int a = 50;       // initialize integer variable a
      cout<<"The value of 'a': "<<a<<endl; // show the output of a

      int * b;          // declare an integer pointer b
      b = &a;           // transfer the address of 'a' to pointer 'b'
      *b = 100;         // change the value of 'a' using pointer 'b'
      cout<<"The value of 'a' using *b: "<<a<<endl;// show the output of a

      int **c;          // declare an integer pointer to pointer 'c'
      c = &b;           // transfer the address of 'b' to pointer to pointer 'c'
      **c = 200;        // change the value of 'a' using pointer to pointer 'c'
      cout<<"The value of 'a' using **c: "<<a<<endl;// show the output of a

      return 0;
}
