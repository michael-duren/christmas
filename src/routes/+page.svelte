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
	<div class="img-container img-small">
		<img src="icons/Toys.png" alt="Christmas Tree" />
	</div>
	<div class="img-container img-large">
		<img src="icons/Cat.png" alt="Christmas Tree" />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex: 1;
		padding: 2rem;
		align-items: center;
		flex-direction: column;
	}
	.img-small {
		display: block;
	}
	.img-large {
		display: none;
	}
	.form {
		order: 1;
	}
	@media (min-width: 768px) {
		.container {
			flex-direction: row;
		}
		.img-small {
			display: none;
		}
		.img-large {
			display: block;
		}
		.form {
			order: 0;
		}
		.form-title {
			font-size: 2.5rem;
		}
		input {
			font-size: 1.5rem;
			padding: 1rem 1rem;
		}
		button {
			font-size: 1.5rem;
			padding: 1.3rem 1rem;
			margin-top: 0;
		}
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
		animation: fadeUp 0.5s ease-in-out;
		animation-fill-mode: forwards;
		opacity: 0;
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
		font-size: 2rem;
		font-family: var(--festive);
		color: #fff;
	}
	input {
		font-size: 1rem;
		border: none;
		padding: 0.8rem;
	}
	.img-container {
		opacity: 0;
		height: 100%;
		animation: fadeLeft 0.7s ease-out;
		animation-delay: 0.3s;
		animation-fill-mode: forwards;
	}
	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
	button {
		margin-top: 0.5rem;
		padding: 1rem 0.7rem;
		width: 100%;
		border: none;
		font-size: 1rem;
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
