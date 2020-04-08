#include <iostream>
using namespace std;
int main()
{
    int s, p, q, r, t, i, a, b;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> a >> b;
        if (a < b)
        {
            if (a % 3 == 1)
            {
                s = 0;
            }
            else if (a % 3 == 2)
            {
                s = 2;
                a = a + 2;
            }
            else
            {
                s = 1;
                a = a + 1;
            }
            if (b >= a)
            {
                p = b - a;
                q = p / 3;
                r = (q * 2) + (p % 3);
                cout << "Case " << i << ": " << s + r << endl;
            }
        }
        else
        {
            if (a % 3 == 1)
            {
                s = 0;
                cout << "Case " << i << ": " << s << endl;
            }
            else
            {
                s = 1;
                cout << "Case " << i << ": " << s << endl;
            }
        }
    }
    return 0;
}