function explain_callback(name, age, task) {
	console.log('hello', name);
	console.log('your age', age);

	task();
}
function washHand() {
	console.log('wash hans with soap');
}
function takeShower() {
	console.log('take shower');
}
explain_callback('naeem', 26, washHand);
explain_callback('noman', 17, takeShower);
