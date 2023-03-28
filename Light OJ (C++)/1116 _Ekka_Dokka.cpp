#include <iostream>
using namespace std;
int main()
{
    int t, i, j;
    long long w, n, m;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> w;
        if (w == 2)
        {
            cout << "Case " << i << ": Impossible" << endl;
        }
        else if (w % 2 != 0)
        {
            cout << "Case " << i << ": Impossible" << endl;
        }
        else
        {
            for (j = 2; j <= w; j = j + 2)
            {
                n = w / j;
                m = w % j;
                if (n % 2 == 1 && m == 0)
                {
                    cout << "Case " << i << ": " << n << " " << j << endl;
                    break;
                }
            }
        }
    }

    return 0;
}