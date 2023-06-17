//Assign and print the roll number, phone number and address of two students
//having names "Sam" and "John" respectively by creating two objects of the class 'Student'.

#include<bits/stdc++.h>

using namespace std;

class Students
{
public:

    int roll_number;
    string phone_number;
    string address;

};

int main()
{
    Students Sam, John;

    Sam.roll_number=3;
    Sam.phone_number="01545455";
    Sam.address = "Dhaka, Bangladesh";

    John.roll_number=9;
    John.phone_number="015214646";
    John.address="Bashundhara, Bangladesh";

    cout<<"Sam info: "<<Sam.roll_number<<" "<<Sam.phone_number<<" "<<Sam.address<<endl;
    cout<<"John info: "<<John.roll_number<<" "<<John.phone_number<<" "<<John.address<<endl;
    return 0;
}
