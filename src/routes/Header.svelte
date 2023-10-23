<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import Icon from '$lib/ui/Icon.svelte';

	export let header;
	export let handleGetInTouchButton: Function;
</script>

<header bind:this={header}>
	<nav>
		<a href="mailto:lucaleiva248@gmail.com">lucaleiva248@gmail.com</a>
		<Button onClick={handleGetInTouchButton}>Get in touch</Button>
	</nav>
	<section class="jumbotron">
		<p>Hello there<Icon name="cat" /></p>
		<h1>My name is Luca,<br /> I&apos;m a Full-Stack web <br /> developer</h1>
		<h2>Inquisitive, tech-savvy but above all, pragmatic</h2>
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

	header {
		gap: 11rem;
		padding-bottom: 16rem;
	}
</style>
