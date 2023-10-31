function dfs(vertext, forest, visited, path, ans) {
    // take action after entering the vertext
    if (path[vertext])
        return true;
    else if (visited[vertext])
        return false;
    // console.log(vertext);
    path[vertext] = true;
    visited[vertext] = true;
    for (var _i = 0, _a = Object.values(forest[vertext]); _i < _a.length; _i++) {
        var child = _a[_i];
        //take action after entering the child node
        if (dfs(child, forest, visited, path, ans)) {
            return true;
        }
        //take action after exiting the child node
    }
    //take action after exiting the vertext
    ans.push(vertext);
    path[vertext] = false;
    return false;
}
function findOrder(numCourses, prerequisites) {
    //create forest
    var forest = {};
    for (var i = 0; i < numCourses; i++) {
        forest[i] = [];
    }
    for (var _i = 0, prerequisites_1 = prerequisites; _i < prerequisites_1.length; _i++) {
        var _a = prerequisites_1[_i], firstCouse = _a[0], secondCourse = _a[1];
        forest[firstCouse].push(secondCourse);
    }
    // console.log(forest);
    // call dfs
    var visited = Array(numCourses).fill(false);
    var path = Array(numCourses).fill(false);
    var ans = [];
    for (var i = 0; i < numCourses; i++) {
        if (visited[i])
            continue;
        if (dfs(i, forest, visited, path, ans)) {
            return [];
        }
    }
    return ans;
}
;
console.log(findOrder(7, [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [5, 6]]));
// console.log(findOrder(2, [[1, 0]]));
