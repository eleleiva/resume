<script lang="ts">
	import type { PageProps } from './$types';
	import { projects } from '#lib/utilities/constants.ts';

	let { form }: PageProps = $props();
</script>

<header id="top">
	<nav aria-label="Page controls">
		<form method="get" action="/">
			<button type="submit">Input: HTML — switch to the styled website</button>
		</form>
		<a href="mailto:lucaleiva248@gmail.com">lucaleiva248@gmail.com</a>
	</nav>
	<h1>Luca Leiva</h1>
	<p>Hello there. My name is Luca, I&apos;m a Full-Stack web developer.</p>
	<p>Inquisitive, tech-savvy but above all, pragmatic.</p>
</header>

<main>
	<section aria-labelledby="about-heading">
		<h2 id="about-heading">About</h2>
		<img src="/images/illustration.png" alt="Pixelated avatar of Luca" width="216" height="216" />
		<p>Born and based in Montevideo, Uruguay, but open for gigs all around the globe.</p>
		<p>
			From the moment I first laid my fingers on a keyboard and tapped into the digital world,
			I&apos;ve been on an epic quest to unravel the mysteries of how computers work. But what
			really set my heart aflutter was the internet&apos;s incredible power to connect the world.
		</p>
		<p>
			I&apos;m passionate about democratizing technology and ensuring that information is easily
			accessible to all, regardless of their challenges.
		</p>
		<p>
			As I ventured into this field, I developed a keen interest in creating component libraries and
			mentoring others.
		</p>
		<p>
			So, whether I&apos;m coding or teaching, I&apos;m all about making the world a more accessible
			place.
		</p>
		<ul>
			<li>
				<a href="https://www.linkedin.com/in/luca-leiva-gonzalez/">LinkedIn</a>
			</li>
			<li>
				<a href="https://github.com/eleleiva/">GitHub</a>
			</li>
			<li>
				<a href="https://github.com/eleleiva/resume">Source code</a>
			</li>
		</ul>
	</section>

	<section aria-labelledby="projects-heading">
		<h2 id="projects-heading">My experiments</h2>
		<p>Ideas I&apos;ve built and explored.</p>
		<ul>
			{#each projects as project (project.title)}
				<li>
					<article>
						<h3>{project.title}</h3>
						<img src={project.image} alt="{project.title} screenshot" width="768" height="484" />
						<p>{project.description}</p>
						<p>
							<a href={project.link} rel="external noopener noreferrer">View project</a>
						</p>
					</article>
				</li>
			{/each}
		</ul>
	</section>

	<section aria-labelledby="contact-heading">
		<h2 id="contact-heading">Drop me a line</h2>
		<p>
			Or hit me up at <a href="mailto:lucaleiva248@gmail.com">lucaleiva248@gmail.com</a>.
		</p>
		<form method="post">
			<p hidden>
				<label for="company">Company</label>
				<input id="company" name="company" type="text" tabindex="-1" autocomplete="off" value="" />
			</p>
			<p>
				<label for="from">From</label><br />
				<input
					id="from"
					name="from"
					type="email"
					required
					maxlength="320"
					autocomplete="email"
					placeholder="frodobaggins@gmail.com"
					value={form?.values?.from ?? ''}
				/>
			</p>
			<p>
				<label for="subject">Subject</label><br />
				<input
					id="subject"
					name="subject"
					type="text"
					required
					minlength="2"
					maxlength="120"
					value={form?.values?.subject ?? ''}
				/>
			</p>
			<p>
				<label for="message">Message</label><br />
				<textarea id="message" name="message" required minlength="10" maxlength="5000" rows="8"
					>{form?.values?.message ?? ''}</textarea
				>
			</p>
			<button type="submit">Send</button>
			{#if form?.success}
				<p role="status">
					Thank you for your message, I will try to get back to you as soon as possible.
				</p>
			{:else if form?.message}
				<p role="alert">{form.message}</p>
			{:else if form}
				<p role="alert">Please check the required fields and try again.</p>
			{/if}
		</form>
	</section>
</main>

<footer>
	<img
		src="/images/computer.png"
		alt="Pixelated computer with a smiley face on the screen"
		width="80"
		height="81"
	/>
	<p>If you&apos;ve scrolled this far, thank you :)</p>
	<p><a href="#top">Back to top</a></p>
</footer>
