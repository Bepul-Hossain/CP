//selection sort time complexity : n*n
//space or memory complexity of bubble sort algorithm is O(1)
//worse case : if elements of array's remain descending order
//that means : n,n-1,n-2,....,4,3,2,1,0,-1,-2....
//best case : if elements of array's remain Ascending order
//that means : -n,-(n-1),-(n-2),....,0,1,2,3,....,n

#include<bits/stdc++.h>
using namespace std;

void selectionSort(int ara[],int n){
    for(int i = 0; i<n; i++){
        for(int j = i+1; j<n; j++){
            if(ara[i]>ara[j]){
                swap(ara[i],ara[j]);
                }
            }
        }
    }
int main(){

    int arr[5]={0,8,-1,4,3};
    selectionSort(arr,5);
    for(int i=0 ; i<5; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}

