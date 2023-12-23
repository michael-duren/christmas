<script lang="ts">
	import type { Card } from '$lib/types/Card';
	export let data: { card: Card };
</script>

<svelte:head>
	<title>Card</title>
	<meta name="card" content="personalized holiday card" />
</svelte:head>

<div class="card">
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

<style>
	h1 {
		font-family: var(--festive);
		font-size: 3rem;
	}
	.card {
		display: flex;
		flex: 1;
		width: 100%;
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
