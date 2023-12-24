<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let charsArray: string[] = 'Merry Christmas'.split('');
	let colorsArray: { char: string; color: string }[] = charsArray.map((c) => {
		return { char: c, color: getRandomColor() };
	});

	onMount(() => {
		const interval = setInterval(() => {
			changeColors();
		}, 500);

		onDestroy(() => {
			clearInterval(interval);
		});
	});

	function changeColors() {
		colorsArray = charsArray.map((c) => {
			return { char: c, color: getRandomColor() };
		});
	}

	function getRandomColor(): string {
		const colors = ['--red-600', '--green-300', '--hint-of-green-500', '--yellow-500', '--red-300'];
		return colors[Math.floor(Math.random() * colors.length)];
	}
</script>

<header>
	<h1>
		<a href="/">
			{#each colorsArray as { char, color }}
				<span style={`color: var(${color})`}>{char}</span>
			{/each}
		</a>
	</h1>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--stone-800);
	}
	h1 {
		font-family: var(--festive);
		font-size: 4rem;
		margin: 0;
		padding: 0;
		animation: fadeRight 0.7s ease-in-out;
		animation-fill-mode: forwards;
		animation-delay: 0.3s;
		opacity: 0;
	}
	@media (min-width: 768px) {
		h1 {
			font-size: 5rem;
		}
	}
	@media (min-width: 1024px) {
		h1 {
			font-size: 7rem;
		}
	}
	a {
		text-decoration: none;
		color: var(--hint-of-green-500);
	}
	span {
		transition: color 1s ease-in-out;
	}
</style>
