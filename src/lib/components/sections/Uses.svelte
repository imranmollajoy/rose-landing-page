<script>
	import UseSingle from './UseSingle.svelte';
	let uses = [
		{
			img: `https://cdn.pixabay.com/photo/2019/07/21/11/43/roses-4352530_960_720.jpg`,
			data: [
				'Ornamental Plants',
				`The majority of ornamental roses are hybrids that were bred for their flowers. A few, mostly
			species roses are grown for attractive or scented foliage, ornamental thorns or for their
			showy fruit. Ornamental roses have been cultivated for millennia, with the earliest known
			cultivation known to date from at least 500 BC in Mediterranean countries, Persia, and China.
			It is estimated that 30 to 35 thousand rose hybrids and cultivars have been bred and selected
			for garden use as flowering plants. Most are double-flowered with many or all of the stamens
			having morphed into additional petals.`
			]
		},
		{
			img: `https://cdn.pixabay.com/photo/2010/12/28/01/00/flowers-4232_960_720.jpg`,
			data: [
				'Cut Flowers',
				`Roses are a popular crop for both domestic and commercial cut flowers. Generally they are harvested and cut when in bud, and held in refrigerated conditions until ready for display at their point of sale.`
			]
		},
		{
			img: `https://cdn.pixabay.com/photo/2018/03/09/20/44/roses-3212567_960_720.jpg`,
			data: [
				'Perfume',
				`Rose perfumes are made from rose oil (also called attar of roses), which is a mixture of volatile essential oils obtained by steam distilling the crushed petals of roses. An associated product is rose water which is used for cooking, cosmetics, medicine and religious practices. The production technique originated in Persia and then spread through Arabia and India, and more recently into eastern Europe. `
			]
		},
		{
			img: `https://cdn.pixabay.com/photo/2022/06/19/08/56/ladybug-7271402_960_720.jpg`,
			data: [
				`Food and drink`,
				`Rose hips are high in vitamin C, are edible raw, and occasionally made into jam, jelly, marmalade, and soup, or are brewed for tea. They are also pressed and filtered to make rose hip syrup. Rose hips are also used to produce rose hip seed oil, which is used in skin products and some makeup products.`
			]
		}
	];
</script>

<section id="uses">
	<h2>Uses</h2>
	{#each uses as use, i}
		<!-- if i is odd, set alternate true -->
		<UseSingle alternate={i % 2 === 1} data={use.data} image={use.img} />
	{/each}
</section>
