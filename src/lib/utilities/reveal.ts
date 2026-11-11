type RevealOptions = {
	threshold?: number;
	rootMargin?: string;
	onReveal?: (element: Element) => void;
};

export const observeReveals = (
	targets: Iterable<Element>,
	{ threshold = 0.18, rootMargin = '0px', onReveal }: RevealOptions = {}
) => {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;

				entry.target.setAttribute('data-visible', 'true');
				onReveal?.(entry.target);
				observer.unobserve(entry.target);
			}
		},
		{ threshold, rootMargin }
	);

	for (const target of targets) {
		observer.observe(target);
	}

	return () => observer.disconnect();
};
