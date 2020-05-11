#include<iostream>
#include<map>
using namespace std;
int main()
{
   int i;
   map <char,double> mp;
   char ch;
   for(i=0;i<5;i++){
    cin>>ch;
    mp[ch]++;
   }
   cout<<"a= "<<mp['a']<<endl;
   cout<<mp['bipul']<<endl;
   return 0;


}
