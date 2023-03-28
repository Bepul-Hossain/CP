#include <bits/stdc++.h>
using namespace std;
int main()
{
    int i, t;
    double p, r;
    scanf("%d", &t);
    for (i = 1; i <= t; i++)
    {
        scanf("%lf", &r);
        p = pow((2 * r), 2) - 2 * acos(0.0) * pow(r, 2);
        printf("Case %d: %.2lf\n", i, p);
    }
    return 0;
}