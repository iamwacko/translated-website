<script lang="ts">
	import LL from '$i18n/i18n-svelte'
	import { onMount } from 'svelte'

	console.info($LL.log({ fileName: '+page.svelte' }))

	let spectators = 0

	const day = new Date('2021-11-20')
</script>

<h2>
	{$LL.welcome}
</h2>

<h3>
	{$LL.summit.schedule(day)}
</h3>

<img src=/rajavauni.avif alt="Rojava University">

<p>{$LL.paragraph}</p>