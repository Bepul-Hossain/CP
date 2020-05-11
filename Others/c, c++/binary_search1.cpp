#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    int a[] = { 1, 5, 8, 9, 6, 7, 3, 4, 2, 0 };
    int asize = sizeof(a) / sizeof(a[0]);
    cout<<asize<<" ok\n";
    sort(a, a + asize);
    if (binary_search(a, a + 10, 2))
        cout << "\nElement 2 is found in the array";
    else
        cout << "\nElement 2 is not found in the array";

    return 0;
}

