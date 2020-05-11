#include <bits/stdc++.h>
using namespace std;

int par[10007];
void makeset(int n)
{
    for(int i = 0; i <= n; i++)
        par[i] = i;
}
int find_set(int a)
{
    while(par[a] != a)
        par[a] = find_set(par[a]);
    return par[a];
}
void union_set(int a, int b)
{
    par[find_set(b)] = find_set(a);
}

int main() {
    makeset(10);
    union_set(1, 3);
    union_set(1, 2);
    union_set(4, 2);
    cout << "a" << endl;
    cout << find_set(4);
    return 0;
}
