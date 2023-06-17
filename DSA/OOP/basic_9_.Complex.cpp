//Print the sum, difference and product of two complex numbers by creating a class named 'Complex'
//with separate functions for each operation whose real and imaginary parts are entered by the user.

#include<bits/stdc++.h>

using namespace std;

class Complex
{
private:
    int real;
    int img;

public:
    Complex(int r, int i)
    {
        real = r;
        img = i;
    }

    int get_real()
    {
        return real;
    }

    int get_img()
    {
        return img;
    }

    void add(Complex c1)
    {
        cout<<c1.get_real()+real<<" + "<<c1.get_img()+img<<"i";
    }
};

int main()
{
    Complex c1(4,5);
    Complex c2(7,8);
    c1.add(c2);

    return 0;
}
