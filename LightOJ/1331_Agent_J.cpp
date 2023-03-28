#include <bits/stdc++.h>
#define pi 3.1415926
#define degree (57.2957804904)
using namespace std;
int main()
{
    int T, i;
    double A, B, C, p, s1, s2, R1, c, R2, R3, a, b, cs2, s3, s, e, f, g, ar;
    cin >> T;
    for (i = 1; i <= T; i++)
    {
        cin >> R1 >> R2 >> R3;
        a = R2 + R3;
        b = R1 + R2;
        c = R1 + R3;
        s = (a + b + c) / 2.0;
        e = s - a;
        f = s - b;
        g = s - c;
        ar = sqrt(s * e * f * g);
        A = acos(((b * b) + (c * c) - (a * a)) / (2 * b * c));
        B = acos(((a * a) + (c * c) - (b * b)) / (2 * a * c));
        C = acos(((b * b) + (a * a) - (c * c)) / (2 * b * a));
        s1 = (R1 * R1 * A) / 2;
        s2 = (R3 * R3 * B) / 2;
        s3 = (R2 * R2 * C) / 2;
        p = ar - (s1 + s2 + s3);
        printf("Case %d: %.10lf\n", i, p);
    }
    return 0;
}