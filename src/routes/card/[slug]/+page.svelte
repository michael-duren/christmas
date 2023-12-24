<script lang="ts">
	import type { Card } from '$lib/types/Card';
	import { fly } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
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

{#if !open}
	<div class="card-front">
		<div out:fly={{ y: 200, duration: 1000 }} class="front-image-container shadow-xl">
			<img src="/icons/Letter.png" alt="Christmas Tree" />
		</div>
	</div>
{:else}
	<div in:fly={{ delay: 1000, duration: 1500, y: 200, easing: sineIn }} class="card">
		<div class="left-side shadow-xl">
			<h1>{data.card.title}</h1>
			<div class="left-image-container">
				<img class="left-image" src="/icons/House.png" alt="House" />
			</div>
			<p>{data.card.content}</p>
			<p class="p-cursive">{data.card.signature}</p>
			<p class="p-cursive">-Michael</p>
		</div>
		<div class="right-side shadow-xl">
			<div class="right-container">
				<img src={data.card.image} alt={data.card.title} />
			</div>
		</div>
	</div>
{/if}

<style>
	h1 {
		font-family: var(--festive);
		font-size: 3rem;
		margin: 0;
		padding: 0;
	}
	.p-cursive {
		font-family: var(--festive);
		font-size: 1.5rem;
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
		flex-direction: column;
		flex: 1;
		width: 100%;
		animation: openCard 0.7s ease-in-out;
	}
	.left-side {
		flex: 1;
		border-radius: 2rem;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
		background: #fff;
		padding: 1rem;
	}
	.left-image {
		width: 10rem;
		object-fit: contain;
	}
	.left-image-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.right-side {
		border-radius: 2rem;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(120deg, var(--red-200) 0%, var(--red-500) 27%, var(--red-800) 100%);
	}
	.right-container {
		padding: 4rem;
	}
	@media (min-width: 768px) {
		.card {
			flex-direction: row;
		}
		.front-image-container {
			flex: 1;
		}
		.left-side {
			border-radius: 2rem;
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
		.right-side {
			border-radius: 2rem;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
</style>
