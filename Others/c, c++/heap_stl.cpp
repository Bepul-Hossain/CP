#include <bits/stdc++.h>
using namespace std;

int main() {

    int arr[4]={5,2,78,12};
    make_heap(arr,arr+4);
    cout<<"front = "<<arr[0]<<endl;
    pop_heap(arr,arr+4);
    cout<<"front = "<<arr[0]<<endl;

    vector<int>vc;
    vc.push_back(5);
    vc.push_back(8);
    vc.push_back(2);
    vc.push_back(45);
    vc.push_back(0);

    is_heap(vc.begin(), vc.end())?
    cout << "The container is heap ":
    cout << "The container is not heap";
    cout << endl;

    vector<int>::iterator  it;
    auto it2 = is_heap_until(vc.begin(),vc.end());
    cout << "The heap elements in container are : ";
    for (it=vc.begin(); it!=vc.end(); it++)
       cout << *it << " ";

    make_heap(vc.begin(),vc.end());
    cout<<"\nmake_heap = ";
    for(auto x : vc){
        cout<<x<<"  ";
    }
    sort_heap(vc.begin(),vc.end());
    cout<<endl<<"sort_heap = ";
    for(auto x : vc){
        cout<<x<<"  ";
    }
    cout<<endl<<vc.front()<<endl;
    vc.push_back(100);
    vc.push_back(-5);
    make_heap(vc.begin(),vc.end());
    cout<<vc.front()<<endl;
    pop_heap(vc.begin(),vc.end());
    //vc.pop_back();
    cout<<vc.front()<<endl;






    return 0;
}
