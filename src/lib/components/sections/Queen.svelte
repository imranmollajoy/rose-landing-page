<script>
	import UseSingle from './UseSingle.svelte';
	let data = [
		`About`,
		`A rose is either a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles. Their flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa. `
	];
</script>

<section id="about">
	<UseSingle
		{data}
		headingType="h2"
		image={`https://cdn.pixabay.com/photo/2014/06/22/05/49/red-374318_960_720.jpg`}
	/>
</section>
