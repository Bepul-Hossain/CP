#include <bits/stdc++.h>
using namespace std;
#define pii pair<string,string>

int main() {

    priority_queue<string>pq;

    pq.push("Hunter");
    pq.push("Tiger");
    pq.push("River");
    pq.push("Forest");

    cout<<pq.top();

    return 0;
}
