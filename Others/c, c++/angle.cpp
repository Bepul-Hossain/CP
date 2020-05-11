#include <bits/stdc++.h>
#define pi 2*acos(0.0)
#include <math.h>

int main()
{
    double a, b, c, A, B, C, R, s, area;
    //pi = acos(-1);

    scanf("%lf %lf %lf", &a, &b, &c);
    s = (a+b+c)/2;
    area = sqrt(s*(s-a)*(s-b)*(s-c));

    R = (a*b*c)/(4*area);

    A = (180/pi)*asin(a/(2*R));
    B = (180/pi)*asin(b/(2*R));
    C =  (180/pi)*asin(c/(2*R));

    printf("%.2lf %.2lf %.2lf", A, B, C);


    return 0;
}
