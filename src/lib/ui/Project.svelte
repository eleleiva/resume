<script lang="ts">
	import Link from './Link.svelte';

	export let title: string;
	export let description: string;
	export let image: string;
	export let link: string;
</script>

<section class="project-container">
	<img src={image} alt="{title} screenshot" />
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
	}

	.project-container img {
		aspect-ratio: calc(4 / 3);
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
		flex-direction: column;
		padding: 20px;
		gap: 16px;
		justify-content: space-between;
		border: 1px solid #e3e2e2;
		border-top: 0px;
	}
</style>
