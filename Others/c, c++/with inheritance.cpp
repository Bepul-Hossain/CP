#include<iostream>
#include<string>
using namespace std;
class student{
    char name[64];
    char id[12];
public:
    student(char *name,char *id){
        strcpy(student::name,name);
        strcpy(student::id,id);
    }
    void showstudentinf(void){
    cout<<"\name: "<<name<<endl;
    cout<<"id:"<<id<<endl;
    }
};
class registration:public student{
    float regfees;
    char *regdate;
public:
    registration(char *name,char *id,float fees,char *data):student(name,id){
    regfees=fees;
    strcpy(registration::regdate,date);
    }
    void showreginfo(void){
        showstudentinfo();
        cout<<" fees :"<<regfees<<endl;
        cout<<"date :"<<regdate<<endl;
    }
};
void main(void)
{
    registration niton("m.kamruzzaman","445678566","34534.87",01/01/2000);
    niton.showstudentinf();
    niton.showreginfo();
}
