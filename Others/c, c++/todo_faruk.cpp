#include<bits/stdc++.h>
using namespace std;

fstream io("todo.txt");
class todo{
    private:
        string task_name;
        string task_description;
        string task_date;
    public:
        void add();
        void show();
        void delet();
        void t_name();
        void t_description();
        void t_date();
        void manual();
        void check();
};

void  todo :: add(){
        t_name();
        getline(cin,task_name);
        t_description();
        getline(cin,task_description);
        t_date();
        getline(cin,task_date);


        io<<task_name<<endl;
        io<<task_description<<endl;
        io<<task_date<<endl;

}
void  todo :: show(){
    int i=1;
        while(!io.eof()){
            cout<<i<<":\n";
            getline (io,task_name);
            getline (io,task_description);
            getline (io,task_date);
            cout<<task_name<<"\t\t\t\t"<<task_date<<endl;
            cout<<task_description<<endl;
            i++;
        }
        manual();
}
void todo :: manual(){
    cout<<"Select an option\n";
    cout<<"1.Add\n";
    cout<<"2.Show";
    cout<<"3.Delete\n";
    cout<<"4.Exit\n";
    check();
}
void todo :: check(){
    int tmp;
    cin>>tmp;
    if(tmp==1){
        add();
    }
    if(tmp==2){
        show();
    }
    if(tmp==3){

    }
    if(tmp==4){
        exit(1);
    }
}
void todo :: t_name(){
    cout<<"Enter Task Name:\n";
}
void todo :: t_description(){
    cout<<"Enter Task Description:\n";
}
void todo :: t_date(){
    cout<<"Enter Task Date:\n";
}

int main(){
    todo my;
    /*
    my.add();
    my.add();
    io.close();
    */
   // io.open("todo.txt");
    my.show();

    return 0;
}


