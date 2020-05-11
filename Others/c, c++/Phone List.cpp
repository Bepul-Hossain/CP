#include<bits/stdc++.h>
using namespace std;

struct TrieNode{

 	map<char,TrieNode*> children;
 	bool endofword;
 	TrieNode(){
 		endofword=false;
 	}
};

void insert(TrieNode* root,string word){

 	TrieNode* current=root;
 	for(int i=0;i<word.size();i++){
 		char ch=word[i];
 		cout<<"ch "<<ch<<endl;
 		TrieNode* node=current->children[ch];
 		cout<<"current->children[ch] "<<current->children[ch]<<endl;
 		cout<<"NOD "<<node<<endl;
 		if(!node)
 		{
 			node=new TrieNode();
 			cout<<"ok "<<current->children[word[i]]<<endl;
 			current->children[word[i]]=node;
 		}
 		current=node;
 	}
 	current->endofword=true;
}

bool prefixsearch(TrieNode *root,string word)
{
 	TrieNode* current=root;
 	for(int i=0;i<word.size();i++)
 	{
 		char ch=word[i];
 		TrieNode *node=current->children[ch];
 		if(!node)
 			return false;
 	current=node;
 	}
 	return true;
}

int main(){

 	TrieNode* root=new TrieNode();
 	cout<<root<<endl;
 	insert(root,"bepul");
 	insert(root,"aarsh");
 	//insert(root,"sharma");
 	//insert(root,"harry");
 	string p;
 	cout<<"Enter the prefix to be searched :";
 	cin>>p;
 	cout<<prefixsearch(root,p)<<endl;
 	return 0;
}

