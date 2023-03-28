#include <stdio.h>
int main()
{
    int t, n, i, j, add, s;
    scanf("%d", &t);
    for (i = 1; i <= t; i++)
    {
        scanf("%d", &n);
        add = 0;
        for (j = 1; j <= n; j++)
        {
            scanf("%d", &s);
            if (s < 0)
            {
                s = 0;
            }
            add = add + s;
        }
        printf("Case %d: %d\n", i, add);
    }
    return 0;
}