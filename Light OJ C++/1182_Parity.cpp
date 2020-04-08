#include <iostream>
using namespace std;
int main()
{
    int t, n, i, j, sum;
    cin >> t;
    for (j = 1; j <= t; j++)
    {
        cin >> n;
        sum = 0;
        for (; 1 <= n;)
        {

            if (n % 2 == 1)
            {
                sum = sum + 1;
            }
            n = n / 2;
        }
        if (sum % 2 == 1)
        {
            cout << "Case " << j << ": odd" << endl;
        }
        else
        {
            cout << "Case " << j << ": even" << endl;
        }
    }
    return 0;
}