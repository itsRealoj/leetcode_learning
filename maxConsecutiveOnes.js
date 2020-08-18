// JavaScript program to count maximum consecutive 
// 1's in a binary array.

var findMaxConsecutiveOnes = function(nums) {
   // Returns count of maximum consecutive 1's 
    // in binary array arr[0..n-1] 
  let count = 0;
  let result = 0;

  for (let n in nums) {
    // Reset count when 0 is found 
    if (nums[n] === 0) count = 0;
    else {
       // If 1 is found, increment count 
       // and update result if count becomes 
       // more. 
      count ++;
      result = Math.max(count, result);
      
    }
  }
  return result;
};
findMaxConsecutiveOnes([1,1,1,0,1,1,0,1,1,1,1]); 