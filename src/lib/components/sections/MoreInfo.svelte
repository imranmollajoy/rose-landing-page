<section>
	<h2>Not Enough?</h2>
	<div class="img-containter">
		<img src="https://images.unsplash.com/photo-1561703142-b883827407ea?&w=500&q=80" alt="" />
	</div>
	<div class="button-container">
		<a href="https://en.wikipedia.org/wiki/Rose">More at Wikipedia</a>
	</div>
</section>

<style>
	a {
		padding: 1rem 4rem;
		color: var(--color-dark);
		background-color: var(--color-light);
		border-left: 0.4rem solid var(--color-accent);
		font-size: 1.4rem;
	}
	.img-containter {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	img {
		margin-bottom: 2rem;
	}

	.button-container {
		display: flex;
		justify-content: stretch;
		align-items: center;
		background-color: var(--color-accent);
	}

	@media (min-width: 768px) {
		img {
			margin-bottom: -5rem;
			margin-right: 2rem;
		}
		.img-containter {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
