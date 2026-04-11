<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import Icon from '$lib/ui/Icon.svelte';

	export let handleGetInTouchButton: () => void;
</script>

<header>
	<nav>
		<a class="email-link" href="mailto:lucaleiva248@gmail.com">lucaleiva248@gmail.com</a>
		<Button onClick={handleGetInTouchButton}>Get in touch</Button>
	</nav>
	<section class="jumbotron">
		<p class="hero-greeting">Hello there<Icon class="hero-greeting-icon" name="cat" /></p>
		<h1 class="hero-title">
			My name is Luca,<br /> I&apos;m a Full-Stack web <br /> developer<span
				class="hero-cursor"
				aria-hidden="true"
			></span>
		</h1>
		<h2 class="hero-subtitle">Inquisitive, tech-savvy but above all, pragmatic</h2>
	</section>
</header>

<style>
	.jumbotron {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		max-width: 100%;
	}

	.jumbotron p {
		text-align: center;
		font-family: NeueBit, sans-serif;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.09375rem;
		margin: 0;
		display: inline-flex;
		align-items: center;
		text-transform: uppercase;
		gap: 0.5rem;
	}

	.hero-greeting,
	.hero-title,
	.hero-subtitle {
		opacity: 0;
		transform: translateY(10px);
		animation: hero-enter 360ms ease forwards;
	}

	.hero-greeting {
		animation-delay: 30ms;
	}

	.hero-title {
		animation-delay: 120ms;
	}

	.hero-subtitle {
		animation:
			hero-enter 360ms ease 220ms forwards,
			phosphor-pulse 3.6s ease-in-out 620ms infinite;
	}

	.jumbotron h2 {
		text-shadow: 0 0 0 rgba(74, 246, 38, 0);
	}

	:global(.hero-greeting-icon) {
		opacity: 0;
		transform: translateY(2px);
		animation: hero-icon-settle 260ms steps(2, end) 280ms forwards;
	}

	.hero-cursor {
		display: inline-block;
		width: 2px;
		height: 0.74em;
		margin-left: 0.18em;
		background: currentColor;
		opacity: 0.92;
		vertical-align: baseline;
		transform: translateY(0.08em);
		animation: cursor-blink 1.25s steps(1, end) infinite;
	}

	header {
		gap: 11rem;
		padding-bottom: 16rem;
	}

	@keyframes cursor-blink {
		0%,
		52% {
			opacity: 1;
		}

		53%,
		100% {
			opacity: 0;
		}
	}

	@keyframes hero-enter {
		from {
			opacity: 0;
			transform: translateY(10px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes phosphor-pulse {
		0%,
		100% {
			text-shadow: 0 0 0 rgba(74, 246, 38, 0);
		}

		50% {
			text-shadow: 0 0 12px rgba(74, 246, 38, 0.26);
		}
	}

	@keyframes hero-icon-settle {
		0% {
			opacity: 0;
			transform: translateY(2px);
		}

		50% {
			opacity: 1;
			transform: translateY(-2px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-greeting,
		.hero-title,
		.hero-subtitle,
		.jumbotron h2,
		:global(.hero-greeting-icon),
		.hero-cursor {
			animation: none;
		}

		.hero-greeting,
		.hero-title,
		.hero-subtitle,
		:global(.hero-greeting-icon) {
			opacity: 1;
			transform: none;
		}

		.hero-cursor {
			transform: translateY(0.08em);
		}
	}

	:global(html[data-animations='off']) .hero-greeting,
	:global(html[data-animations='off']) .hero-title,
	:global(html[data-animations='off']) .hero-subtitle,
	:global(html[data-animations='off']) .jumbotron h2,
	:global(html[data-animations='off']) :global(.hero-greeting-icon),
	:global(html[data-animations='off']) .hero-cursor {
		animation: none;
	}

	:global(html[data-animations='off']) .hero-greeting,
	:global(html[data-animations='off']) .hero-title,
	:global(html[data-animations='off']) .hero-subtitle,
	:global(html[data-animations='off']) :global(.hero-greeting-icon) {
		opacity: 1;
		transform: none;
	}

	:global(html[data-animations='off']) .hero-cursor {
		transform: translateY(0.08em);
	}
</style>
