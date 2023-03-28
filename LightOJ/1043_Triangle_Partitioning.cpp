#include <iostream>
#include <stdio.h>
#include <math.h>
using namespace std;
int main()
{
    int t, n;
    double ab, ac, bc, m, de, ad, y;
    cin >> n;
    for (t = 1; t <= n; t++)
    {
        cin >> ab >> ac >> bc >> m;
        y = 1 / (1 + (1 / m));
        de = (sqrt(y) * bc);
        ad = (de / bc) * ab;
        printf("Case %d: %.9lf\n", t, ad);
        //cout<<"Case "<<t<<": "<<ad<<endl;
    }
    return 0;
}