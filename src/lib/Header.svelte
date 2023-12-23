<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let charsArray: string[] = 'Merry Christmas'.split('');
	let colorsArray: { char: string; color: string }[] = charsArray.map((c) => {
		return { char: c, color: getRandomColor() };
	});

	onMount(() => {
		const interval = setInterval(() => {
			changeColors();
		}, 2000);

		onDestroy(() => {
			clearInterval(interval);
		});
	});

	function changeColors() {
		console.log('changeColors');
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
	{#each colorsArray as { char, color }}
		<h1>
			<span style={`color: var(${color})`}>{char}</span>
		</h1>
	{/each}
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
		font-size: 7rem;
		margin: 0;
		padding: 0;
		color: var(--yellow-500);
	}
	span {
		transition: color 0.5s ease-in-out;
	}
</style>
