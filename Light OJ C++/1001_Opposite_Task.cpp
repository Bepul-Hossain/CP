#include <iostream>
using namespace std;
int main()
{
    int t, n, i, j, k;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> n;
        if (n <= 10)
        {
            k = 0;
        }
        else
        {
            k = n - 10;
        }
        j = n - k;
        cout << k << " " << j << endl;
    }
    return 0;
}