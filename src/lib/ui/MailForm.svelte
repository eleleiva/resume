<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../routes/$types';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Textarea from './Textarea.svelte';

	let {
		formRef = $bindable(),
		form
	}: {
		formRef: HTMLFormElement | undefined;
		form: ActionData;
	} = $props();
</script>

<form bind:this={formRef} method="post" use:enhance>
	<div class="company" aria-hidden="true">
		<label for="company">Company</label>
		<input id="company" name="company" type="text" tabindex="-1" autocomplete="off" value="" />
	</div>
	<Input
		name="from"
		type="email"
		error={!!form?.errors?.properties?.from?.errors?.length}
		required
		label="From"
		placeholder="FRODOBAGGINS@GMAIL.COM"
	/>
	<Input
		name="subject"
		type="text"
		error={!!form?.errors?.properties?.subject?.errors?.length}
		required
		label="Subject"
		placeholder="GIVE IT A CATCHY TITLE"
	/>
	<Textarea
		name="message"
		label="Message"
		error={!!form?.errors?.properties?.message?.errors?.length}
		placeholder="PUT YOUR THOUGHTS HERE"
		required
	/>
	<div class="submit-container">
		<Button type="submit">Send</Button>
		{#if form?.success}
			<p>THANK YOU FOR YOUR MESSAGE, I WILL TRY TO GET BACK TO YOU AS SOON AS POSSIBLE :)</p>
		{/if}
	</div>
</form>

<style>
	.company {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

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
