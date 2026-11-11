<script lang="ts">
	import '../../app.css';
	import { inject } from '@vercel/analytics';
	import { asset } from '$app/paths';
	import { dev } from '$app/env';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="preload"
		href={asset('fonts/PPNeueBit-Bold.otf')}
		as="font"
		type="font/otf"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href={asset('fonts/PPMondwest-Regular.otf')}
		as="font"
		type="font/otf"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />
