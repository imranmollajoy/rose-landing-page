<script>
	export let alternate = false;
	export let data = ['Title', 'Description'];
	export let headingType = 'h3';
	export let image = 'https://via.placeholder.com/600x400';
	$: heading = `<${headingType}>${data[0]}</${headingType}>`;
</script>

<div class="use" class:alternate>
	<img src={image} alt="" />
	<div class="text">
		{@html heading}
		{#each data as para, i}
			{#if i > 0}
				<p>{data[i]}</p>
			{/if}
		{/each}
	</div>
</div>

<style>
	.use {
		display: flex;
		flex-direction: column-reverse;
		align-items: flex-end;
		gap: 1rem;
		margin: 2rem 0;
	}
	.alternate {
		/* no reversing from .use in mobile*/
		flex-direction: column-reverse;
	}
	p:last-child {
		margin-bottom: 0;
	}
	p {
		text-align: justify;
	}

	/* media for tab and pc */
	@media (min-width: 768px) {
		.use {
			flex-direction: row;
			margin: 8rem 0;
		}
		.alternate {
			flex-direction: row-reverse;
		}
		.use img {
			width: 315px;
			height: 512px;
			object-fit: cover;
		}
		h3 {
			text-align: left;
		}
	}
</style>
