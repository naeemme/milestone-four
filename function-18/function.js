function evenify(num) {
	if (num % 2 == 0) {
		console.log(num, ':: is even number');
	} else {
		console.log(num, ': is odd number');
	}
}
function evenify_all(nums) {
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		evenify(num);
	}
}
nums = [5, 12, 59, 32, 7];
evenify_all(nums);
friend_age = [13, 25, 23, 28, 27];
evenify_all(friend_age);
