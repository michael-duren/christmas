<script lang="ts">
	import type { Card } from '$lib/types/Card';
	export let data: { card: Card };
</script>

<svelte:head>
	<title>Card</title>
	<meta name="card" content="personalized holiday card" />
</svelte:head>

<div class="card">
	<div class="left-side">
		<h1>{data.card.title}</h1>
		<p>{data.card.content}</p>
	</div>
	<div class="right-side">
		<img src={data.card.image} alt={data.card.title} />
	</div>
</div>

<style>
	.card {
		display: flex;
		flex: 1;
		width: 100%;
	}
	.left-side {
		flex: 1;
		border-radius: 1rem;
		border: 1px solid #ccc;
		background: #fff;
	}
	.right-side {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		border: 1px solid #ccc;
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
</style>
