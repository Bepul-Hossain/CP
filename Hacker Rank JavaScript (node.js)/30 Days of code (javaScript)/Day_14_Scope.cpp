#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Difference
{
private:
    vector<int> elements;

public:
    int maximumDifference;

    // Add your code here

    Difference(vector<int> a)
    {
        elements = a;
    }
    void computeDifference()
    {
        int length = elements.size();
        maximumDifference = 0;
        for (int i = 0; i < length - 2; i++)
        {
            for (int j = i + 1; j < length; j++)
            {
                int dif;
                dif = abs(elements[i] - elements[j]);
                if (dif > maximumDifference)
                {
                    maximumDifference = dif;
                }
            }
        }
    }

}; // End of Difference class

int main()
{
    int N;
    cin >> N;

    vector<int> a;

    for (int i = 0; i < N; i++)
    {
        int e;
        cin >> e;

        a.push_back(e);
    }

    Difference d(a);

    d.computeDifference();

    cout << d.maximumDifference;

    return 0;
}