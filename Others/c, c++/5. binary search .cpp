#include<iostream>
using namespace std;
int main()
{

    int a[50],i,n,item,first,last,mid;
    cin>>n;
    cout<<"Enter sorting number"<<endl;
    for(i=0; i<n; i++){
        cin>>a[i];
    }
    cout<<"Enter search item number = ";
    cin>>item;
    first=0;
    last=n-1;
    mid=(first+last)/2;
    while(first<=last){
        if(a[mid]==item){
            cout<<"searching value "<<item<<" is found"<<endl;
            cout<<"Index is "<<mid;
            break;
        }
        else if(a[mid]<item){
            first=mid+1;
        }
        else{
            last=mid-1;
        }
        mid=(first+last)/2;
    }
    if(first>last){
        cout<<"Not found"<<endl;
    }


    return 0;
}

