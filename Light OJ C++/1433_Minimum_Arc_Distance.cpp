#include <bits/stdc++.h>
using namespace std;
int main()
{
    int ox, oy, ax, ay, bx, by, i, t;
    double oa, o, p, ab, bo;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> ox >> oy >> ax >> ay >> bx >> by;
        oa = sqrt(pow((ox - ax), 2) + pow((oy - ay), 2));
        ab = sqrt(pow((ax - bx), 2) + pow((ay - by), 2));
        bo = sqrt(pow((bx - ox), 2) + pow((by - oy), 2));
        o = acos((((oa * oa) + (bo * bo) - (ab * ab))) / (2 * oa * bo));
        p = o * oa;
        printf("Case %d: %.8lf\n", i, p);
    }
    return 0;
}