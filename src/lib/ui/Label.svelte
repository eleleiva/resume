<script lang="ts">
	export let name: string;
	export let label: string;
	export let required: boolean = false;
</script>

<label for={name}>
	<span>
		{label}
		{#if required}
			<sup class="required">*</sup>
		{/if}
	</span>
	<slot />
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		text-transform: uppercase;

		font-family: NeueBit, sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.08rem;
	}

	.required {
		color: hsla(0, 100%, 50%, 1);
	}
</style>
