//bubble sort time complexity : n*n
//space or memory complexity of bubble sort algorithm is O(1)
//worse case : if elements of array's remain descending order
//that means : n,n-1,n-2,....,4,3,2,1,0,-1,-2....
//best case : if elements of array's remain Ascending order
//that means : -n,-(n-1),-(n-2),....,0,1,2,3,....,n


#include<bits/stdc++.h>
using namespace std;

void bubbleSort(int ara[],int n){
    int i,j;
    for(i = 1; i <= n; i++){
        for(j = 0; j < n; j++){
            if(ara[j+1] < ara[j]){
                swap(ara[j+1],ara[j]);
            }
        }
    }
}
int main(){

    int arr[5]={0,8,-1,4,3};
    bubbleSort(arr,5);
    for(int i=0 ; i<5; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}
