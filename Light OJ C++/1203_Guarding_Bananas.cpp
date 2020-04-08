#include <bits/stdc++.h>
#define P(X) cout << "db " << X << endl;
#define P2(X, Y) cout << "d2 " << X << " " << Y << endl;
#define ll long long
#define rep(i, n) for (i = 1; i <= n; i++)
#define FO freopen("t.txt", "w", stdout);
#define MS(XX, YY) memset(XX, YY, sizeof(XX));
#define pii pair<ll, ll>
using namespace std;
#define SZ 100009
struct Point
{
    ll x, y;
};

Point p0, pnts[SZ];
int n; //total n points

// A utility function to find next to top in a stack
Point stackp[SZ];
int in = 0;
Point nextToTop()
{
    return stackp[in - 1];
}

ll distSq(Point p1, Point p2)
{
    return (p1.x - p2.x) * (p1.x - p2.x) +
           (p1.y - p2.y) * (p1.y - p2.y);
}

int orientation(Point p, Point q, Point r)
{
    ll val = (q.y - p.y) * (r.x - q.x) -
             (q.x - p.x) * (r.y - q.y);

    if (val == 0)
        return 0;             // colinear
    return (val > 0) ? 1 : 2; // clock or counterclock wise
}

// A function used by library function qsort() to sort an array of
// points with respect to the first point
bool cmp(Point p1, Point p2)
{
    int ore = orientation(p0, p1, p2);
    if (ore == 0)
        return distSq(p0, p1) < distSq(p0, p2);
    return (ore == 2);
}
int convexHull()
{
    int i, mp = 0;
    for (i = 1; i < n; i++)
    {
        if (pnts[i].y < pnts[mp].y)
        {
            mp = i;
        }
        else if (pnts[i].y == pnts[mp].y)
        {
            if (pnts[i].x < pnts[mp].x)
            {
                mp = i;
            }
        }
    }
    swap(pnts[0], pnts[mp]);
    p0 = pnts[0];
    sort(pnts + 1, pnts + n, cmp);
    int m = 1;
    for (i = 1; i < n; i++)
    {
        while (i < n - 1 && orientation(p0, pnts[i], pnts[i + 1]) == 0)
        {
            i++;
        }
        pnts[m] = pnts[i];
        m++;
    }
    if (m < 3)
        return -1;
    in = 0;
    for (i = 0; i < 3; i++)
    {
        stackp[++in] = pnts[i];
    }
    for (i = 3; i < m; i++)
    {
        while (orientation(stackp[in - 1], stackp[in], pnts[i]) == 1)
            in--;
        stackp[++in] = pnts[i];
    }
    return in;
}

long double fangc(Point p, Point q, Point r)
{
    long double an, as, bs, cs;
    as = distSq(p, r);
    bs = distSq(p, q);
    cs = distSq(q, r);

    an = (bs + cs - as) / (2 * sqrt(bs * cs));
    // P(an)
    return acosl(an);
}

int main()
{
    int i, j, a, b, ts, cn = 0;
    double an, ca, pi = 2 * acos(0.0);
    //freopen("test.txt","r",stdin);
    scanf("%d", &ts);
    while (ts--)
    {
        scanf("%d", &n);
        for (i = 0; i < n; i++)
        {
            scanf("%lld %lld", &pnts[i].x, &pnts[i].y);
        }

        if (convexHull() < 0)
            an = 0;
        else
        {
            an = 1000;
            stackp[0] = stackp[in];
            stackp[in + 1] = stackp[1];
            for (i = 1; i <= in; i++)
            {
                ca = fangc(stackp[i - 1], stackp[i], stackp[i + 1]);
                an = min(ca, an);
            }
        }
        an = an / pi * 180;
        printf("Case %d: %lf\n", ++cn, an);
    }
    return 0;
}
