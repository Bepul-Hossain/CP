#include <iostream>
using namespace std;
int main()
{
    int t, mypos, liftpos, i, p;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> mypos >> liftpos;
        if (mypos <= liftpos)
        {
            cout << "Case " << i << ": " << (liftpos * 4) + 19 << endl;
        }
        else
        {
            cout << "Case " << i << ": " << ((mypos - liftpos) * 4) + (mypos * 4) + 19 << endl;
        }
    }

    return 0;
}