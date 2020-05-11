#include <iostream>
using namespace std;

int main()
{
    int t,i,j;
    int n,l,sum_mango=0,sum=0;
    cin>>t;
    for(i=1;i<=t;i++)
    {
        cin>>n>>l;
        int mango[n],limit[n];
        for(j=0;j<n;j++)
        {
            cin>>mango[j];
            sum_mango=sum_mango+mango[j];
        }
        for(j=0;j<n;j++)
        {
            cin>>limit[j];
            if(mango[j]<=limit[j])
            {
                sum=sum+mango[j];
            }
            else
            {
                sum=sum+limit[j];
            }
        }
        if(l<sum_mango)
        {
            cout<<"Case "<<i<<": No\n";
        }
        else if(sum<sum_mango)
        {
            cout<<"Case "<<i<<": No\n";
        }
        else
        {
            cout<<"Case "<<i<<": Yes\n";
        }
        sum=0;
        sum_mango=0;
    }
    return 0;
}
