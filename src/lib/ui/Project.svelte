<script lang="ts">
	import Link from './Link.svelte';

	export let title: string;
	export let description: string;
	export let image: string;
	export let link: string;
	export let index = 0;
</script>

<section class="project-container" data-reveal style:--reveal-delay={`${120 + index * 70}ms`}>
	<div class="project-image-frame">
		<img src={image} alt="{title} screenshot" />
	</div>
	<div class="project-header-container">
		<div class="project-header-content">
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
		<Link href={link}>View project</Link>
	</div>
</section>

<style>
	.project-header-content {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.project-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		transition:
			transform 180ms steps(2, end),
			filter 180ms steps(3, end);
	}

	.project-image-frame {
		position: relative;
		overflow: hidden;
		background: #111;
	}

	.project-image-frame::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.14) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		opacity: 0;
		transform: translateY(-110%);
		transition:
			opacity 220ms steps(3, end),
			transform 320ms steps(5, end);
		pointer-events: none;
	}

	.project-container img {
		aspect-ratio: calc(4 / 3);
		display: block;
		transition:
			transform 220ms steps(3, end),
			filter 220ms steps(3, end);
	}

	.project-header-container h4 {
		font-family: Inter, sans-serif;
		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.project-header-container p {
		font-size: 1.0625rem;
		line-height: 1.65;
	}

	.project-header-container {
		display: flex;
		flex-direction: column;
		padding: 20px;
		gap: 16px;
		justify-content: space-between;
		border: 1px solid #e3e2e2;
		border-top: 0px;
		background: rgba(255, 255, 255, 0);
		transition:
			border-color 220ms steps(3, end),
			background-color 220ms steps(3, end);
	}

	.project-container:hover,
	.project-container:focus-within {
		transform: translateY(-4px);
		filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.18));
	}

	.project-container:hover .project-image-frame::after,
	.project-container:focus-within .project-image-frame::after {
		opacity: 1;
		transform: translateY(110%);
	}

	.project-container:hover img,
	.project-container:focus-within img {
		transform: scale(1.02);
		filter: contrast(1.05);
	}

	.project-container:hover .project-header-container,
	.project-container:focus-within .project-header-container {
		border-color: #68fe65;
		background: rgba(104, 254, 101, 0.04);
	}

	@media (prefers-reduced-motion: reduce) {
		.project-container,
		.project-container img,
		.project-image-frame::after,
		.project-header-container {
			transition: none;
		}

		.project-container:hover,
		.project-container:focus-within {
			transform: none;
			filter: none;
		}
	}

	:global(html[data-animations='off']) .project-container,
	:global(html[data-animations='off']) .project-container img,
	:global(html[data-animations='off']) .project-image-frame::after,
	:global(html[data-animations='off']) .project-header-container {
		transition: none;
	}

	:global(html[data-animations='off']) .project-container:hover,
	:global(html[data-animations='off']) .project-container:focus-within {
		transform: none;
		filter: none;
	}
</style>
