<svelte:head>
	<title>Start</title>
	<meta name="start" content="answer the question" />
</svelte:head>

<div class="container">
	<div class="form rounded-xl shadow-xl">
		<div class="name">
			<label for="name">Enter your full name</label>
			<input type="text" class="shadow-lg rounded-lg" name="name" placeholder="John Doe" />
		</div>
		<button class="rounded-lg shadow-lg">Start</button>
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
		gap: 2rem;
	}
	label {
		font-size: 2.5rem;
		font-family: var(--festive);
		color: #fff;
	}
	input {
		font-size: 1.5rem;
		border: none;
		padding: 2rem 1rem;
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
	}
	button:hover {
		background: var(--red-600);
	}
</style>
