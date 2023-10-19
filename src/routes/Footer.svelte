<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import Icon from '$lib/ui/Icon.svelte';
	import Input from '$lib/ui/Input.svelte';
	import Textarea from '$lib/ui/Textarea.svelte';

	export let footer;
	export let form;
	export let handleBackToTop: Function;
</script>

<footer bind:this={footer}>
	<section class="form-container">
		<div class="call-to-action-container">
			<Icon name="cupOfTea" />
			<h3>Drop me a line</h3>
			<h4>Or hit me up at <a href="mailto:lucaleiva248@gmail.com">lucaleiva248@gmail.com</a></h4>
		</div>
		<form bind:this={form}>
			<Input name="from" type="email" required label="From" placeholder="FRODOBAGGINS@GMAIL.COM" />
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
