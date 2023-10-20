<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import Button from '$lib/ui/Button.svelte';
	import Icon from '$lib/ui/Icon.svelte';
	import Input from '$lib/ui/Input.svelte';
	import Textarea from '$lib/ui/Textarea.svelte';

	export let footer;
	export let formRef;
	export let handleBackToTop: Function;
	export let form: ActionData;
</script>

<footer bind:this={footer}>
	<section class="form-container">
		<div class="call-to-action-container">
			<Icon name="cupOfTea" />
			<h3>Drop me a line</h3>
			<h4>Or hit me up at <a href="mailto:lucaleiva248@gmail.com">lucaleiva248@gmail.com</a></h4>
		</div>
		<form bind:this={formRef} method="post" use:enhance>
			<Input
				name="from"
				type="email"
				required
				label="From"
				placeholder="FRODOBAGGINS@GMAIL.COM"
				value={form?.from?.toString() ?? ''}
			/>
			<Input
				name="subject"
				type="text"
				required
				label="Subject"
				placeholder="GIVE IT A CATCHY TITLE"
				value={form?.subject?.toString() ?? ''}
			/>
			<Textarea
				name="message"
				label="Message"
				placeholder="PUT YOUR THOUGHTS HERE"
				required
				value={form?.message?.toString() ?? ''}
			/>
			<div class="submit-container">
				<Button type="submit">Send</Button>
				{#if form?.success}
					<p>THANK YOU FOR YOUR MESSAGE, I WILL TRY TO GET BACK TO YOU AS SOON AS POSSIBLE :)</p>
				{/if}
			</div>
		</form>
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

	.submit-container {
		display: flex;
		gap: 1.5rem;
	}

	.submit-container p {
		color: #4af626;
		font-family: NeueBit;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1.5rem; /* 120% */
		letter-spacing: 0.1rem;
	}
</style>
