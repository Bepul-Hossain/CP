#include<iostream>
#include<iomanip>
#include<math.h>
#define pi 2.0*acos(0.0)


 using namespace std ;
 int main ()
 {
     int t , i  ;
     cout<<pi<<endl;
     cin>>t ;
     for (i=1 ; i<=t ; i++)
     {
         double x , n ,a, R ,r ;
         cin >> R >> n;
         a=pi/n;
         cout<<a<<endl;
         x=sin(pi / n);
         cout<<x<<endl;
         r=(x * R) / (1 + x) ;
         cout << setprecision(10) << "Case " << i << ": " << r <<endl ;
     }
     return 0 ;
 }
