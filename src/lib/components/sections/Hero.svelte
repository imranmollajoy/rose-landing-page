<script>
	import hero from '../../assets/hero.jpg';
</script>

<section>
	<div class="text">
		<h1>A flower like no other</h1>
		<h5>Considered as the queen of all flower, Rose is the largest flower family in the world.</h5>
		<img src={hero} alt="" />
	</div>
	<div class="cta">
		<a href="#about" role="button">Learn More</a>
		<a href="#" role="button" aria-label="secondary">Visit Gallery</a>
	</div>
</section>

<style>
	section {
		height: 100vh;
		position: relative;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.text {
		justify-content: center;
		display: flex;
		flex-direction: column;
	}
	.text h1 {
		max-width: 80%;
	}
	.text h5 {
		text-transform: none;
	}
	img {
		max-width: 50%;
		height: auto;
		object-fit: cover;
		position: absolute;
		z-index: -1;
		right: 0;
		bottom: 50%;
	}
	.cta {
		margin-top: 4rem;
		gap: 2rem;
		display: flex;
		flex-direction: row;
	}
	/* media for tab and pc */
	@media (min-width: 768px) {
		h5 {
			max-width: 60%;
		}
	}
</style>
