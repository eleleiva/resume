<script lang="ts">
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/env';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
