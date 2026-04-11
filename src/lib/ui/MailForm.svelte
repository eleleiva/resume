<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Textarea from './Textarea.svelte';

	export let formRef: HTMLFormElement | null = null;
	export let form: { from: string; subject: string; message: string; success?: boolean } | null =
		null;
</script>

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

<style>
	.submit-container {
		display: flex;
		gap: 1.5rem;
	}

	.submit-container p {
		color: #4af626;
		font-family: NeueBit, sans-serif;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1.5rem; /* 120% */
		letter-spacing: 0.1rem;
	}
</style>
