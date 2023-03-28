#include <iostream>
#include <cmath>
#include <cstdio>
using namespace std;
#define PI acos(-1)

int main()
{
    int t, i;
    double r1, g, r2, h, p, DE, s, v1, v2, v, total;
    cin >> t;
    for (i = 1; i <= t; i++)
    {
        cin >> r1 >> r2 >> h >> p;
        DE = ((r1 - r2) * (h - p)) / h;
        s = r1 - DE;
        /*v1=3.14159*s*s*p;
        v2=3.14459*r2*r2*p;
        v=(v1-v2)/2;
        total=v2+v;
        cout<<total;*/
        g = ((s * s) + (s * r2) + (r2 * r2));
        v = (PI * p) * g / 3.0;
        printf("Case %d: %.9lf\n", i, v);
    }
    return 0;
}