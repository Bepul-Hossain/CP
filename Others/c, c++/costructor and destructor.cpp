#include<iostream>
using namespace std;
class abc{
    int year;
    double hieght;
public:
    abc(){}
    abc(int y,double h){
        year=y;
        hieght=h;
        cout<<y*h;
    }
    ~abc();
};

int main()
{
    abc ob(5,5.7);
  cout<<ob.abc();

    return 0;
}
