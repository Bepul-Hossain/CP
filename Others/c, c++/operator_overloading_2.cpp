#include <iostream>
using namespace std;
class loc {
    int longitude, latitude;
public:
    loc() {}
    loc(int lg, int lt) {
    longitude = lg;
    latitude = lt;
    }
void show() {
    cout << longitude << " ";
    cout << latitude << "\n";
    }
    loc operator+(loc op2);
loc operator-(loc op2);
};
    // Overload + for loc.
loc loc::operator-(loc o2)
{
    loc temp;
    temp.longitude = o2.longitude - longitude;
    temp.latitude = o2.latitude -latitude;
    return temp;
}
loc loc::operator+(loc op2)
{
    loc temp;
    temp.longitude = op2.longitude - longitude;
    temp.latitude = op2.latitude -latitude;
    return temp;
}
int main()
{
    loc ob1(10, 20), ob2( 5, 30);
    ob1.show(); // displays 10 20
    ob2.show(); // displays 5 30
    ob1 = ob1+ob2;
    ob1.show(); // displays 15 50

    return 0;
}
//C h a p t e r 1 5 : O p e r a t o r O v e r l o a d i n g 387
