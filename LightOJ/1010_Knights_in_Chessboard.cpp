#include <bits/stdc++.h>
using namespace std;
int main()
{
    //t=test case , m=row ,n=column

    int m, n, t, sum;
    scanf("%d", &t);
    for (int k = 1; k <= t; k++)
    {
        scanf("%d%d", &m, &n);

        if (m == 1 || n == 1)
        {
            sum = m * n;
            printf("Case %d: %d\n", k, sum);
        }
        else if (m == 2 || n == 2)
        {
            int s, p;
            if (m == 2)
            {
                s = n;
            }
            else
            {
                s = m;
            }

            if (s % 4 == 1)
            {
                p = s + 1;
                printf("Case %d: %d\n", k, p);
            }
            if (s % 4 == 2)
            {
                p = s + 2;
                printf("Case %d: %d\n", k, p);
            }
            if (s % 4 == 3)
            {
                p = s + 1;
                printf("Case %d: %d\n", k, p);
            }
            if (s % 4 == 0)
            {
                p = s;
                printf("Case %d: %d\n", k, p);
            }
        }

        else
        {
            sum = 0;
            for (int i = 1; i <= m; i++)
            {
                for (int j = 1; j <= n; j++)
                {
                    if (i % 2 != 0 && j % 2 != 0 || i % 2 == 0 && j % 2 == 0)
                    {
                        sum = sum + 1;
                    }
                }
            }
            printf("Case %d: %d\n", k, sum);
        }
    }
    return 0;
}