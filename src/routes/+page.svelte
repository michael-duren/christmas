<svelte:head>
	<title>Start</title>
	<meta name="start" content="answer the question" />
</svelte:head>

<div class="container shadow-xl rounded-xl">
	<div class="name">
		<label for="name">Enter your name</label>
		<input
			type="text"
			class="shadow-lg rounded-lg"
			name="name"
			placeholder="Enter your first name"
		/>
	</div>
	<button class="rounded-lg">Go!</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 2rem;
		background: white;
		gap: 2rem;
		justify-content: space-between;
	}
	.name {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	label {
		font-size: 2rem;
		font-family: var(--festive);
	}
	input {
		font-size: 2rem;
		border: none;
		padding: 2rem 1rem;
	}
	button {
		border: none;
		padding: 2rem 1rem;
		font-size: 3rem;
		cursor: pointer;
		background: var(--red-500);
		color: var(--stone-50);
	}
	button:hover {
		background: var(--red-600);
	}
</style>
