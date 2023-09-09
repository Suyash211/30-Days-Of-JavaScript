/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var getSum = function(candidates,target,answer,currentSum,currArr,idx){
    if(currentSum == target){
        answer.push([...currArr]);
        return;
    }
    if(currentSum > target || idx >= candidates.length)
        return;
    currArr.push(candidates[idx]);
    getSum(candidates,target,answer,currentSum + candidates[idx],currArr,idx);
    currArr.pop();
    getSum(candidates,target,answer,currentSum,currArr,idx+1);
};

var combinationSum = function(candidates, target) {
    let ans = [];
    getSum(candidates,target,ans,0,[],0);
    return ans;
};