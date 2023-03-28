#include <bits/stdc++.h>
#define P(X) cout << "db " << X << endl;
#define P2(X, Y) cout << "d2 " << X << " " << Y << endl;
#define ll long long
#define rep(i, n) for (i = 1; i <= n; i++)
#define FO freopen("t.txt", "w", stdout);
#define MS(XX, YY) memset(XX, YY, sizeof(XX));
#define pii pair<int, int>
using namespace std;
char ptn[1000009], str[1000009];
int mv[1000009], lp, ls;
void kmphs()
{
    int i, j, p;
    for (j = 0, i = 1; i < lp; i++)
    {
        if (ptn[i] == ptn[j])
        {
            j++;
            mv[i] = j;
        }
        else if (j)
        {
            j = mv[j - 1];
            i--;
        }
        else
        {
            mv[i] = 0;
        }
    }
}
int kmp()
{
    int i = 0, j = 0, k, mtc = 0;
    for (i = 0, j = 0; i < ls; i++)
    {
        if (str[i] == ptn[j])
        {
            j++;
            if (j == lp)
            {
                mtc++;
                //                printf("%d\n",i-lp);
            }
        }
        else if (j)
        {
            i--;
            j = mv[j - 1];
        }
    }
    return mtc;
}
int main()
{
    int i, j, a, b, ts, cn = 0, n;
    //freopen("test.txt","r",stdin);
    scanf("%d", &ts);
    while (ts--)
    {
        scanf("%s %s", str, ptn);
        lp = strlen(ptn);
        ls = strlen(str);
        kmphs();

        printf("Case %d: %d\n", ++cn, kmp());
    }
    return 0;
}
