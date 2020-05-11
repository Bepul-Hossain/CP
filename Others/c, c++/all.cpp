#include<iostream>
using namespace std;

int main(){
    int arr[10]={4,5,8,41,7,98,1,23,65,11};
    int maximum=arr[0],minimum=arr[0],sum=0;
    double avg;
    for(int i=0;i<10;i++){
        sum=sum+arr[i];
        if(maximum<arr[i]){
            maximum=arr[i];
        }
        if(minimum>arr[i]){
            minimum=arr[i];
        }
    }
    avg=sum/10.0;
    cout<<"Maximum is:"<<maximum<<endl;
    cout<<"Minimum is:"<<minimum<<endl;
    cout<<"Total is:"<<sum<<endl;
    cout<<"Average is:"<<avg<<endl;
}

