<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/ui/Button.svelte';
	import Icon from '$lib/ui/Icon.svelte';
	import MailForm from '$lib/ui/MailForm.svelte';
	import type { ActionData } from './$types';

	let {
		formRef = $bindable(),
		form,
		handleBackToTop
	}: {
		formRef: HTMLFormElement | undefined;
		form: ActionData;
		handleBackToTop: () => void;
	} = $props();
	let closingTag = $state<HTMLElement>();
	let ctaVisible = $state(false);
	let closingTagVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;

					if (entry.target === formRef) {
						ctaVisible = true;
					}

					if (entry.target === closingTag) {
						closingTagVisible = true;
					}

					entry.target.setAttribute('data-visible', 'true');
					observer.unobserve(entry.target);
				});
			},
			{
				threshold: 0.22,
				rootMargin: '0px 0px -6% 0px'
			}
		);

		if (formRef) observer.observe(formRef);
		if (closingTag) observer.observe(closingTag);

		return () => {
			observer.disconnect();
		};
	});
</script>

<footer>
	<section class="form-container">
		<div class:is-visible={ctaVisible} class="call-to-action-container">
			<span class="cta-icon"><Icon name="cupOfTea" /></span>
			<h3>Drop me a line</h3>
			<h4>
				or hit me up at <a class="email-link" href="mailto:lucaleiva248@gmail.com"
					>lucaleiva248@gmail.com</a
				>
			</h4>
			<MailForm bind:formRef {form} />
		</div>
	</section>
	<section
		bind:this={closingTag}
		class:is-visible={closingTagVisible}
		class="closing-tag-container"
	>
		<img
			class="closing-tag-computer"
			height="80"
			width="80"
			src="/images/computer.png"
			alt="Pixelated computer with a smiley face on the screen"
		/>
		<p>If you&apos;ve scrolled this far, thank you :)</p>
		<Button onClick={handleBackToTop}
			>Back to top<Icon class="back-to-top-icon" name="arrowUp" /></Button
		>
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

	.call-to-action-container.is-visible .cta-icon {
		animation: tea-rise 340ms steps(2, end) 100ms 1 both;
	}

	.closing-tag-container.is-visible .closing-tag-computer {
		animation: computer-wake 440ms steps(2, end) 120ms 1 both;
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

	.closing-tag-container :global(button:hover .back-to-top-icon),
	.closing-tag-container :global(button:focus-visible .back-to-top-icon) {
		transform: translateY(-3px);
	}

	.closing-tag-container :global(.back-to-top-icon) {
		transition: transform 180ms steps(2, end);
	}

	@keyframes tea-rise {
		0% {
			opacity: 0.55;
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

	@keyframes computer-wake {
		0% {
			opacity: 0.75;
			filter: brightness(0.85) contrast(1);
			transform: translateY(2px);
		}

		50% {
			opacity: 1;
			filter: brightness(1.22) contrast(1.08);
			transform: translateY(-1px);
		}

		100% {
			opacity: 1;
			filter: brightness(1) contrast(1);
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.closing-tag-container.is-visible .closing-tag-computer,
		.call-to-action-container.is-visible .cta-icon,
		.closing-tag-container :global(.back-to-top-icon) {
			animation: none;
			transition: none;
		}
	}

	:global(html[data-animations='off']) .closing-tag-container.is-visible .closing-tag-computer,
	:global(html[data-animations='off']) .call-to-action-container.is-visible .cta-icon,
	:global(html[data-animations='off']) .closing-tag-container :global(.back-to-top-icon) {
		animation: none;
		transition: none;
	}
</style>
