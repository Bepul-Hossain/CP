#include <iostream>
using namespace std;
int main()
{
    int t, i, ax, ay, bx, by, cx, cy, dx, dy, a;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> ax >> ay >> bx >> by >> cx >> cy;
        dx = (cx - bx) + ax;
        dy = cy - by + ay;
        a = (ax - bx) * (by - cy) - (bx - cx) * (ay - by);
        if (a < 0)
        {
            a = -a;
        }
        cout << "Case " << i << ": " << dx << " " << dy << " " << a << endl;
    }

    return 0;
}