<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/ui/Icon.svelte';
	import Link from '$lib/ui/Link.svelte';
	import Project from '$lib/ui/Project.svelte';
	import { projects } from '$lib/utilities/constants';

	let main: HTMLElement;
	let aboutMeHeader: HTMLElement;
	let projectsHeader: HTMLElement;
	let aboutMeHeaderVisible = false;
	let projectsHeaderVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;

					if (entry.target === aboutMeHeader) {
						aboutMeHeaderVisible = true;
					}

					if (entry.target === projectsHeader) {
						projectsHeaderVisible = true;
					}

					entry.target.setAttribute('data-visible', 'true');
					observer.unobserve(entry.target);
				});
			},
			{
				threshold: 0.18,
				rootMargin: '0px 0px -8% 0px'
			}
		);

		const revealableElements = main.querySelectorAll<HTMLElement>('[data-reveal]');

		revealableElements.forEach((element) => {
			element.setAttribute('data-reveal-init', 'true');
			observer.observe(element);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<main bind:this={main}>
	<section
		bind:this={aboutMeHeader}
		class:is-visible={aboutMeHeaderVisible}
		class="about-me-header"
		data-reveal
	>
		<span class="about-me-header-icon"><Icon name="mapMarker" /></span>
		<h3>Born and based in Montevideo, Uruguay</h3>
		<p>But open for gigs all around the globe</p>
	</section>
	<article class="about-me-container" data-reveal style:--reveal-delay={'80ms'}>
		<section class="about-me-aside">
			<img width="216" height="216" src="/images/illustration.png" alt="Pixelated avatar" />
			<div class="about-me-aside-links-container">
				<Link href="https://www.linkedin.com/in/luca-leiva-gonzalez/">linkedin</Link>
				<Link href="https://github.com/eleleiva/">github</Link>
				<Link href="https://github.com/eleleiva/resume">source code</Link>
			</div>
		</section>
		<section class="about-me-main">
			<h4 class="about-me-title">About<Icon name="happyFace" /></h4>
			<div class="about-me-text-container">
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
					and mentoring others.
				</p>
				<p>
					So, whether I&apos;m coding or teaching, I&apos;m all about making the world a more
					accessible place.
				</p>
			</div>
		</section>
	</article>

	<article class="projects-section-container">
		<div
			bind:this={projectsHeader}
			class:is-visible={projectsHeaderVisible}
			class="projects-header-container"
			data-reveal
		>
			<span class="projects-header-icon"><Icon name="box" /></span>
			<h3>My experiments</h3>
			<h4>Ideas I've built and explored</h4>
		</div>
		<div class="projects-container">
			{#each projects as project, index}
				<Project
					title={project.title}
					description={project.description}
					image={project.image}
					link={project.link}
					{index}
				/>
			{/each}
		</div>
	</article>
</main>

<style>
	:global([data-reveal][data-reveal-init='true']) {
		opacity: 0;
		transform: translateY(16px);
		transition:
			opacity 280ms steps(4, end),
			transform 280ms steps(4, end);
		transition-delay: var(--reveal-delay, 0ms);
	}

	:global([data-reveal][data-visible='true']) {
		opacity: 1;
		transform: translateY(0);
	}

	.projects-container {
		display: grid;
		gap: 4rem 5rem;
		grid-template-columns: repeat(3, 1fr);
		max-width: 100%;
	}

	.projects-section-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5rem;
	}

	.projects-header-container {
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		align-items: center;
	}

	.projects-header-container.is-visible .projects-header-icon {
		animation: box-pop 320ms steps(2, end) 120ms 1 both;
	}

	.projects-header-container h4 {
		font-family: NeueBit, sans-serif;
		text-transform: uppercase;
	}

	.about-me-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.about-me-header.is-visible .about-me-header-icon {
		animation: marker-pulse 360ms steps(2, end) 120ms 1 both;
	}

	.about-me-header p {
		font-family: NeueBit, sans-serif;

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

	.about-me-text-container {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.about-me-main {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
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
	}

	.about-me-container {
		display: flex;
		gap: 6rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	@keyframes marker-pulse {
		0% {
			transform: scale(0.94);
			opacity: 0.6;
		}

		50% {
			transform: scale(1.08);
			opacity: 1;
		}

		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes box-pop {
		0% {
			transform: translateY(2px) scale(0.96);
			opacity: 0.65;
		}

		50% {
			transform: translateY(-2px) scale(1.04);
			opacity: 1;
		}

		100% {
			transform: translateY(0) scale(1);
			opacity: 1;
		}
	}

	@media (max-width: 1280px) {
		.projects-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 780px) {
		.about-me-title {
			justify-content: center;
		}

		.projects-container {
			grid-template-columns: 1fr;
			max-width: 65ch;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global([data-reveal][data-reveal-init='true']) {
			opacity: 1;
			transform: none;
			transition: none;
		}

		.about-me-header.is-visible .about-me-header-icon,
		.projects-header-container.is-visible .projects-header-icon {
			animation: none;
		}
	}

	:global(html[data-animations='off']) :global([data-reveal][data-reveal-init='true']) {
		opacity: 1;
		transform: none;
		transition: none;
	}

	:global(html[data-animations='off']) .about-me-header.is-visible .about-me-header-icon,
	:global(html[data-animations='off']) .projects-header-container.is-visible .projects-header-icon {
		animation: none;
	}
</style>
