#include <iostream>
using namespace std;
int main()
{
    int n, i, j, k;
    cin >> n;
    for (i = 1; i <= n; i++)
    {
        cin >> j;

        cin >> k;
        cout << "Case " << i << ": " << j + k << endl;
    }
    return 0;
}