<script lang="ts">
	import type { Card } from '$lib/types/Card';
	import { fly } from 'svelte/transition';
	import { sineIn, sineOut } from 'svelte/easing';
	export let data: { card: Card };
	let open = false;

	setTimeout(() => {
		open = true;
	}, 1500);
</script>

<svelte:head>
	<title>Card</title>
	<meta name="card" content="personalized holiday card" />
</svelte:head>

<!-- add front card -->

{#if !open}
	<div class="card-front">
		<div
			in:fly={{ x: -200, duration: 1000 }}
			out:fly={{ y: 200, duration: 1000, easing: sineOut }}
			class="front-image-container shadow-xl"
		>
			<img src="/icons/Letter.png" alt="Christmas Tree" />
		</div>
	</div>
{:else}
	<div in:fly={{ delay: 1000, duration: 1500, y: 200, easing: sineIn }} class="card">
		<div class="left-side shadow-xl">
			<h1>{data.card.title}</h1>
			<p>{data.card.content}</p>
			<p>{data.card.signature}</p>
			<p>Michael</p>
		</div>
		<div class="right-side shadow-xl">
			<img src={data.card.image} alt={data.card.title} />
		</div>
	</div>
{/if}

<style>
	h1 {
		font-family: var(--festive);
		font-size: 3rem;
	}
	.card-front {
		display: flex;
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.front-image-container {
		width: 50%;
		animation: fadeRight 1s ease-in-out;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(
			120deg,
			var(--green-200) 0%,
			var(--green-500) 27%,
			var(--green-800) 100%
		);
	}
	.card-front img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
	.card {
		display: flex;
		flex: 1;
		width: 100%;
		animation: openCard 0.7s ease-in-out;
	}
	.left-side {
		flex: 1;
		border-radius: 1rem;
		background: #fff;
		padding: 1rem;
	}
	.right-side {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		background: linear-gradient(120deg, var(--red-200) 0%, var(--red-500) 27%, var(--red-800) 100%);
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
</style>
