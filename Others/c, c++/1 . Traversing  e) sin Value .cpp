/* ASIN EXAMPLE */
#include <iostream>
#include<stdio.h>
#include <math.h>

#define PI 3.14159265
using namespace std;
int main ()
{
  double param, result;
  cin>>param;
  //cout<<asin (param)<<endl;
  result=sin(PI*param/180.0);
  printf ("The arc sin of %f is %f degrees\n", param, result);
  return 0;
}
