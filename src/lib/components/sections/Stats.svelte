<section>
	<img src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?&w=500&q=50" alt="" />
	<div class="text">
		<h3>8 Classes</h3>
		<h3>120 Families</h3>
		<h3><span>5000+</span> Varities</h3>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.text {
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		align-items: center;
		width: 100%;
	}
	span {
		color: var(--color-accent);
	}
	/* media for tab and pc */
	@media (min-width: 768px) {
		.text {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
	}
</style>
