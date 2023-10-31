function dfs(vertext: number, forest: { [key: string]: number[] }, visited: Array<boolean>, path: Array<boolean>, ans: number[]): boolean {
    // take action after entering the vertext
    if (path[vertext]) return true;
    else if (visited[vertext]) return false;
    // console.log(vertext);

    path[vertext] = true;
    visited[vertext] = true;

    for (let child of Object.values(forest[vertext])) {
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

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    //create forest
    const forest: { [key: string]: number[] } = {};
    for (let i = 0; i < numCourses; i++) {
        forest[i] = [];
    }

    for (let [firstCouse, secondCourse] of prerequisites) {
        forest[firstCouse].push(secondCourse);
    }
    // console.log(forest);

    // call dfs
    const visited: Array<boolean> = Array(numCourses).fill(false);
    const path: Array<boolean> = Array(numCourses).fill(false);
    const ans: Array<number> = [];
    for (let i = 0; i < numCourses; i++) {
        if (visited[i]) continue;
        if (dfs(i, forest, visited, path, ans)) {
            return [];
        }
    }
    return ans;
};

console.log(findOrder(7, [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [5, 6]]));
// console.log(findOrder(2, [[1, 0]]));
