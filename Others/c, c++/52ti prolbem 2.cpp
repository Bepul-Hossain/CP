#include<bits/stdc++.h>
using namespace std;

fstream io;
class todo{
    private:
        int tmp;
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
        io.open("todo.txt",ios::app);
        t_name();
        getchar();
        getline(cin,task_name);
        t_description();
        getline(cin,task_description);
        t_date();
        getline(cin,task_date);
        io<<task_name<<endl;
        io<<task_description<<endl;
        io<<task_date<<endl;
        io.close();
        manual();

}
void  todo :: show(){
        io.open("todo.txt");
        int i=1;
        cout<<"\n\n";
        while(!io.eof()){
            getline (io,task_name);
            getline (io,task_description);
            getline (io,task_date);
            if(io.eof()){
                io.close();
                manual();
            }
            cout<<i<<endl;
            cout<<task_name<<"\t\t\t\t"<<task_date<<endl;
            cout<<task_description<<endl;
            i++;
        }
        io.close();
        manual();
}
void todo :: delet(){
    cout<<"Which one do you want to delete?\n";
    cin>>tmp;
    ofstream temp;
    io.open("todo.txt");
    temp.open("temp.txt",ios::out);
    int i=1;
    while(!io.eof()){
            getline (io,task_name);
            getline (io,task_description);
            getline (io,task_date);
            if(i!=tmp && !io.eof()){
                temp<<task_name<<endl;
                temp<<task_description<<endl;
                temp<<task_date<<endl;
            }
            i++;
    }
    temp.close();
    io.close();
    remove("todo.txt");
    rename("temp.txt","todo.txt");
    manual();
}
void todo :: manual(){
    cout<<"\n\nSelect an option\n";
    cout<<"1.Add\n";
    cout<<"2.Show\n";
    cout<<"3.Delete\n";
    cout<<"4.Exit\n";
    check();
}
void todo :: check(){

    cin>>tmp;
    if(tmp==1){
        add();
    }
    if(tmp==2){
        show();
    }
    if(tmp==3){
        delet();
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
    my.show();
    return 0;
}
