  let arr=[[1,3],[2,3],[3,2],[1,4],[1,5],[1,5],[1,4],[3,2],[2,4],[3,2]]; 
  const result = [];
  const hash = {};
  const freq = [];
  for (let i = 0; i < arr.length; i += 1) {
    const [action, value] = arr[i];
    const initValue = hash[value] || 0;
    if (action === 1) {
      hash[value] = initValue + 1;
      freq[initValue] = (freq[initValue] || 0) - 1;
      freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
    }
    if (action === 2 && initValue > 0) {
      hash[value] = initValue - 1;
      freq[initValue - 1] += 1;
      freq[initValue] -= 1;
    }
    if (action === 3) result.push(freq[value] > 0 ? 1 : 0);
  }
  console.log(result);

  
