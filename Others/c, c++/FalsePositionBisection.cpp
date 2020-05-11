#include <bits/stdc++.h>
using namespace std;
double tolarance=0.001;
class RootFinding{
    double a,b;

    double basefunction(double x)
    {
        return x*x*x-x*x+2;
    }
    public:
    void frange()
    {
        do{
            a=rand()%100;
            b=-rand()%100;
        }while(basefunction(a)*basefunction(b)>=0);
    }
    double bisection()
    {
        double fa,fb,mid;
        frange();
        do{
            fa=basefunction(a);
            fb=basefunction(b);
            mid=(a+b)/2;
            if(basefunction(mid)*fa>=0){
                a=mid;
            }
            else {
                b=mid;
            }
        }while(abs(a-b)>tolarance);
        return mid;
    }
    double falseposition()
    {
        double fa,fb,mid;
        frange();
        int iterations=100000;
        do{
            fa=basefunction(a);
            fb=basefunction(b);
            mid= (a*basefunction(b) - b*basefunction(a))/ (basefunction(b) - basefunction(a));
            if(basefunction(mid)*fa<0){

                b=mid;
            }
            else {
                a=mid;
            }

        }while(iterations--);
        return mid;
    }
};
int main()
{
    int i,j,a,b,ts,f=1,cn=0,n;
    RootFinding rf;
    printf("%lf\n",rf.bisection());
    printf("%lf\n",rf.falseposition());
    return 0;
}
