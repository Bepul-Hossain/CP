#include<iostream>
#include<fstream>
#include<cstring>
using namespace std;

int main()
{
    int i;
    char str[100];

    ofstream out("Rubel");

    cin >> str;

    out << str;

    out.close();

    ifstream in("Rubel");

    for(i=0;i<10;i++)
    {
        char temp;

        temp = str[40+i];
        str[40+i]=str[59-i];
        str[59-i]=temp;
    }

    cout << str;

    in.close();

    return 0;
}
