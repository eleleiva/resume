<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import Icon from '$lib/ui/Icon.svelte';
	import Input from '$lib/ui/Input.svelte';
	import Link from '$lib/ui/Link.svelte';
	import Textarea from '$lib/ui/Textarea.svelte';
	import { buildThresholdList } from '$lib/utilities/animation';
	import { onMount } from 'svelte';

	let form: HTMLFormElement;
	let header: HTMLElement;
	let footer: HTMLElement;
	let container: HTMLElement;

	const handleGetInTouchButton = () => {
		form.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
	};

	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	let currentIntersectionRatio = 1;

	const handleIntersections = (entries: IntersectionObserverEntry[]) => {
		currentIntersectionRatio = entries.reduce((maxIntersection, entry) => {
			if (maxIntersection > entry.intersectionRatio) return maxIntersection;

			return entry.intersectionRatio;
		}, 0);
	};

	const ANIMATION_SMOOTHNESS = 3;
	$: saturationLevelPercent = currentIntersectionRatio * ANIMATION_SMOOTHNESS * 100;
	$: invertedSaturationLevelPercent = 100 - currentIntersectionRatio * ANIMATION_SMOOTHNESS * 100;

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersections, {
			threshold: buildThresholdList()
		});

		observer.observe(header);
		observer.observe(footer);
	});
</script>

<div
	bind:this={container}
	class="container"
	style:background-color={`hsla(0, 0%, ${invertedSaturationLevelPercent}%, 1)`}
	style:color={`hsla(0, 0%, ${saturationLevelPercent}%, 1)`}
>
	<header bind:this={header}>
		<nav>
			<a href="mailto:lucaleiva248@gmail.com">lucaleiva248@gmail.com</a>
			<Button onClick={handleGetInTouchButton}>Get in touch</Button>
		</nav>
		<section class="jumbotron">
			<p>Hello there<Icon name="cat" /></p>
			<h1>My name is Luca,<br /> I&apos;m a Full-Stack web <br /> developer</h1>
			<h2>Inquisitive, tech-savvy but above all, incisive</h2>
		</section>
	</header>

	<main>
		<section class="about-me-header">
			<Icon name="mapMarker" />
			<h3>Born and based in Montevideo, Uruguay</h3>
			<p>But open for gigs all around the globe</p>
		</section>
		<article class="about-me-container">
			<section class="about-me-aside">
				<img src="/images/illustration.png" alt="Pixelated avatar" />
				<div class="about-me-aside-links-container">
					<Link href="https://www.linkedin.com/in/luca-leiva-gonzalez/">linkedin</Link>
					<Link href="https://github.com/eleleiva/">github</Link>
					<Link href="https://github.com/eleleiva/resume">source code</Link>
				</div>
			</section>
			<section>
				<h4 class="about-me-title">About<Icon name="happyFace" /></h4>
				<p>
					From the moment I first laid my fingers on a keyboard and tapped into the digital world,
					I&apos;ve been on an epic quest to unravel the mysteries of how computers work. But what
					really set my heart aflutter was the internet&apos;s incredible power to connect the
					world.
				</p>
				<p>
					I&apos;m passionate about democratizing technology and ensuring that information is easily
					accessible to all, regardless of their challenges.
				</p>
				<p>
					As I ventured into this field, I developed a keen interest in creating component libraries
					and mentoring others. On a completely unrelated note, I also dabble in craft beer making.
				</p>
				<p>
					So, whether I&apos;m concocting code or brewing a batch of the finest ale, I&apos;m all
					about making the world a more accessible place.
				</p>
			</section>
		</article>

		<article class="projects-section-container">
			<div class="projects-header-container">
				<Icon name="box" />
				<h3>My side projects</h3>
			</div>
			<div class="projects-container">
				<section>
					<img src="/images/particles-screenshot.png" alt="Particles screenshot" />
					<div class="project-header-container">
						<h4>Particles</h4>
						<Link href="https://agents-model.lucaleiva.com">View project</Link>
					</div>
				</section>
				<section>
					<img src="/images/pathfinder-screenshot.png" alt="Pathfinder screenshot" />
					<div class="project-header-container">
						<h4>Pathfinder</h4>
						<Link href="https://pathfinder.lucaleiva.com">View project</Link>
					</div>
				</section>
				<section>
					<img src="/images/typify-screenshot.png" alt="Typify screenshot" />
					<div class="project-header-container">
						<h4>Typify</h4>
						<Link href="https://typify.lucaleiva.com">View project</Link>
					</div>
				</section>
			</div>
		</article>
	</main>

	<footer bind:this={footer}>
		<section class="form-container">
			<div class="call-to-action-container">
				<Icon name="cupOfTea" />
				<h3>Drop me a line</h3>
				<h4>Or hit me up at <a href="mailto:lucaleiva248@gmail.com">lucaleiva248@gmail.com</a></h4>
			</div>
			<form bind:this={form}>
				<Input
					name="from"
					type="email"
					required
					label="From"
					placeholder="FRODOBAGGINS@GMAIL.COM"
				/>
				<Input
					name="subject"
					type="text"
					required
					label="Subject"
					placeholder="GIVE IT A CATCHY TITLE"
				/>
				<Textarea name="message" label="Message" />
				<div>
					<Button type="submit">Send</Button>
					<!-- success/error message -->
				</div>
			</form>
		</section>
		<section class="closing-tag-container">
			<img src="/images/computer.png" alt="Pixelated computer with a smiley face on the screen" />
			<p>If you&apos;ve scrolled this far, thank you :)</p>
			<Button onClick={handleBackToTop}>Back to top</Button>
		</section>
	</footer>
</div>

<style>
	header,
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}

	section {
		max-width: 100%;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 12.5rem;
		padding: 16rem 0 16rem 0;
		margin: 0 auto;
	}

	footer {
		display: flex;
		flex-direction: column;
		gap: 16rem;
		padding: 16rem 0 16rem 0;
		align-items: center;
		margin: 0 auto;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: -webkit-fill-available;
		align-items: center;
		max-width: 70rem;
	}

	nav a {
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.075rem;
		text-transform: uppercase;
	}

	a {
		color: currentColor;
		font-family: NeueBit;
	}

	h1 {
		text-align: center;
		font-family: NeueBit;
		font-size: 6.75rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.50625rem;
		margin: 0;
		text-transform: uppercase;
		max-width: 100%;
	}

	h2 {
		color: #4af626;
		text-align: center;
		font-family: Mondwest;
		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin: 0;
	}

	h3 {
		font-family: Mondwest;
		font-size: 4rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-align: center;
	}

	h4 {
		font-family: NeueBit;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.12rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 100%;
		max-width: 37.5rem;
	}

	p {
		max-width: 65ch;
	}

	img {
		max-width: 100%;
	}

	.jumbotron {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 9rem 0 16rem 0;
		align-items: center;
		max-width: 100%;
	}

	.jumbotron p {
		text-align: center;
		font-family: NeueBit;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.09375rem;
		margin: 0;
		display: inline-flex;
		align-items: center;
		text-transform: uppercase;
	}

	.form-container {
		display: flex;
		flex-direction: column;
		gap: 5rem;
		width: 100%;
		align-items: center;
	}

	.closing-tag-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.closing-tag-container p {
		text-transform: uppercase;
		font-family: NeueBit;

		text-align: center;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.1rem;
	}

	.call-to-action-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.call-to-action-container h4 {
		text-transform: uppercase;
	}

	.projects-container {
		display: grid;
		gap: 5rem;
		grid-template-columns: repeat(2, 1fr);
		max-width: 100%;
	}

	.project-header-container h4 {
		font-family: Inter;
		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.project-header-container {
		display: flex;
		justify-content: space-between;
	}

	.projects-section-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.projects-header-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.about-me-header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.about-me-header p {
		font-family: NeueBit;

		text-align: center;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.1rem;

		text-transform: uppercase;
	}

	.about-me-title {
		display: inline-flex;
		align-items: center;
		margin: 0;
		text-transform: uppercase;
	}

	.about-me-aside {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.about-me-aside-links-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-family: Inter;
		font-size: 1.5rem;
	}

	.about-me-container {
		display: flex;
		gap: 6rem;
		justify-content: center;
		flex-wrap: wrap;
		font-family: Inter;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.container {
		transition:
			background-color 500ms ease,
			color 500ms ease;
		background-color: #161616;
		color: #fff;

		padding: 2rem 1rem;
	}

	.container a {
		transition:
			background-color 500ms ease,
			color 500ms ease;
		color: #fff;
	}

	@media (max-width: 1440px) {
		.projects-container {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 780px) {
		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 1.125rem;
		}

		h3 {
			font-size: 2.5rem;
		}

		h4 {
			font-size: 1.25rem;
		}
	}
</style>
