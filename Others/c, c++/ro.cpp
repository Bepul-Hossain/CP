#include<iostream>
#include<fstream>
using namespace std;
int main()
{
    ifstream out("text.txt");
    if(out) cout<<"bipul"<<endl;
    out.close();

    return 0;
}
