#include <stdio.h>
int main()
{
    int t, a, b, i, p, c;
    scanf("%d", &t);
    for (i = 1; i <= t; i++)
    {
        scanf("%d%d%d", &a, &b, &c);
        p = (a * a) + (b * b);
        if (p == (c * c))
        {
            printf("Case %d: yes\n", i);
        }
        else
        {
            printf("Case %d: no\n", i);
        }
    }

    return 0;
}