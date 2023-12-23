<script lang="ts">
	import { goto } from '$app/navigation';
	import type { User } from '$lib/types/User';

	let user: User = {
		firstName: '',
		lastName: ''
	};

	const handleOpenCard = () => {
		if (!user.firstName || !user.lastName) return;
		goto(`/card/${user.firstName}-${user.lastName}`);
	};
</script>

<svelte:head>
	<title>Happy Holidays</title>
	<meta name="start" content="answer the question" />
</svelte:head>

<div class="container">
	<div class="form rounded-xl shadow-xl">
		<div class="form-title">Enter your full name</div>
		<div class="name">
			<label for="first">First Name</label>
			<input
				type="text"
				bind:value={user.firstName}
				class="shadow-lg rounded-lg"
				name="first"
				placeholder="John"
			/>
		</div>
		<div class="name">
			<label for="last">Last Name</label>
			<input
				bind:value={user.lastName}
				type="text"
				class="shadow-lg rounded-lg"
				name="last"
				placeholder="Doe"
			/>
		</div>
		<button
			on:click={handleOpenCard}
			disabled={!user.firstName || !user.lastName}
			class="rounded-lg shadow-lg">Open</button
		>
	</div>
	<div class="img-container">
		<img src="icons/Cat.png" alt="Christmas Tree" />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex: 1;
		padding: 2rem;
		align-items: center;
	}
	.form {
		display: flex;
		flex-direction: column;
		border: 1px solid red;
		align-items: center;
		gap: 1rem;
		height: 100%;
		flex: 1;
		padding: 2rem;
		background: repeating-linear-gradient(
			45deg,
			var(--red-500),
			var(--red-500) 10px,
			var(--red-600) 10px,
			var(--red-600) 20px
		);
	}
	.name {
		display: flex;
		flex-direction: column;
	}
	label {
		font-weight: bold;
		font-size: 1rem;
		padding-bottom: 0.5rem;
	}
	.form-title {
		font-size: 2.5rem;
		font-family: var(--festive);
		color: #fff;
	}
	input {
		font-size: 1.5rem;
		border: none;
		padding: 1rem 1rem;
	}
	.img-container {
		height: 100%;
	}
	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
	button {
		padding: 1.3rem 1rem;
		width: 100%;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		background: var(--red-500);
		color: var(--stone-50);
		transition: color scale 0.3s ease-in-out;
	}
	button:hover {
		background: var(--red-600);
	}
	button:disabled {
		background: var(--stone-50);
		color: var(--red-500);
		cursor: not-allowed;
	}
	button:active {
		transform: scale(1.05);
	}
</style>
