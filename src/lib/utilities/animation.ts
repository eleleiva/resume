export function buildThresholdList() {
	const thresholds = [0];
	const numSteps = 1000;

	for (let i = 1; i <= numSteps; i++) {
		const ratio = i / numSteps;
		thresholds.push(ratio);
	}

	return thresholds;
}
