#include <stdio.h>
int main()
{
    int t, n, i, j, p, r, sum;
    scanf("%d", &t);
    for (i = 1; i <= t; i++)
    {
        scanf("%d", &n);
        r = n;
        sum = 0;
        while (n > 0)
        {
            p = n % 10;
            sum = p + sum * 10;
            n = n / 10;
        }
        if (sum == r)
        {
            printf("Case %d: Yes\n", i);
        }
        else
        {
            printf("Case %d: No\n", i);
        }
    }
    return 0;
}