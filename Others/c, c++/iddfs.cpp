// C++ program to search if a target node is reachable from
// a source with given max depth.
#include<bits/stdc++.h>
using namespace std;
vector<int>g[100];
// A function used by IDDFS
bool DLS(int v, int target, int limit);
// IDDFS traversal of the vertices reachable from v
bool IDDFS(int v, int target, int max_depth);
int main(){
	g[0].push_back(1);
	g[0].push_back(2);
	g[1].push_back(3);
	g[1].push_back(4);
	g[2].push_back(5);
    g[2].push_back(6);
	int target = 6, maxDepth = 3, src = 0;
	if (IDDFS(src, target, maxDepth) == true)
		cout << "Target is reachable from source "
				"within max depth";
	else
		cout << "Target is NOT reachable from source "
				"within max depth";
	return 0;
}
// A function to perform a Depth-Limited search
// from given source 'src'
bool DLS(int src, int target, int limit){
	if (src == target)
		return true;

	// If reached the maximum depth, stop recursing.
	if (limit <= 0)
		return false;

	// Recur for all the vertices adjacent to source vertex
	for (int i = 0; i < g[src].size(); i++)
	if (DLS(g[src][i], target, limit-1) == true)
		return true;

	return false;
}
// IDDFS to search if target is reachable from v.
// It uses recursive DFSUtil().
bool IDDFS(int src, int target, int max_depth){
	// Repeatedly depth-limit search till the
	// maximum depth.
	for (int i = 0; i <= max_depth; i++)
	if (DLS(src, target, i) == true)
		return true;

	return false;
}

