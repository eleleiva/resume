<script lang="ts">
	import type { ActionData } from './$types';
	import Button from '$lib/ui/Button.svelte';
	import Icon from '$lib/ui/Icon.svelte';
	// import MailForm from '$lib/ui/MailForm.svelte';

	export let footer;
	export let formRef: HTMLFormElement;
	export let handleBackToTop: Function;
	export let form: ActionData;
</script>

<footer bind:this={footer}>
	<section class="form-container">
		<div class="call-to-action-container" bind:this={formRef}>
			<Icon name="cupOfTea" />
			<h3>Drop me a line</h3>
			<h4>at <a href="mailto:lucaleiva248@gmail.com">lucaleiva248@gmail.com</a></h4>
		</div>
		<!-- <MailForm bind:formRef bind:form /> -->
	</section>
	<section class="closing-tag-container">
		<img
			height="80"
			width="80"
			src="/images/computer.png"
			alt="Pixelated computer with a smiley face on the screen"
		/>
		<p>If you&apos;ve scrolled this far, thank you :)</p>
		<Button onClick={handleBackToTop}>Back to top<Icon name="arrowUp" /></Button>
	</section>
</footer>

<style>
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
		gap: 1.5rem;
	}

	.closing-tag-container p {
		text-transform: uppercase;
		font-family: NeueBit, sans-serif;

		text-align: center;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.1rem;
	}

	.call-to-action-container {
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		align-items: center;
	}

	.call-to-action-container h4 {
		text-transform: uppercase;
	}
</style>
