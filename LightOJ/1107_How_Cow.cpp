#include <iostream>
using namespace std;
int main()
{
    int T, i;
    cin >> T;
    for (i = 1; i <= T; i++)
    {
        cout << "Case " << i << ":" << endl;
        int x1, y1, x2, y2, M, j, x, y;
        cin >> x1 >> y1 >> x2 >> y2;
        cin >> M;

        for (j = 1; j <= M; j++)
        {
            cin >> x >> y;
            if (x1 <= x && x <= x2 && y1 <= y && y <= y2)
            {
                cout << "Yes" << endl;
            }
            else
            {
                cout << "No" << endl;
            }
        }
    }
    return 0;
}
