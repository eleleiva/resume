export function buildThresholdList() {
	let thresholds = [];
	let numSteps = 1000;

	for (let i = 1; i <= numSteps; i++) {
		let ratio = i / numSteps;
		thresholds.push(ratio);
	}

	thresholds.push(0);
	return thresholds;
}
