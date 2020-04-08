#include <bits/stdc++.h>
using namespace std;
#define pi 2 * acos(0.0)
int main()
{
    int t, i;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        double r, R;
        int n;
        cin >> R;
        cin >> n;
        r = (R * sin(pi / n)) / (1 + sin(pi / n));
        cout << setprecision(12) << "Case " << i << ": " << r << endl;
    }

    return 0;
}
