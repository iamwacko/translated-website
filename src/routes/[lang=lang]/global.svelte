<script lang="ts">
	import LL from '$i18n/i18n-svelte'
    const day = new Date('2023-05-03')
</script>

<h2>
	{$LL.welcome({ year: 2021 })}
</h2>

<h3>
	{$LL.summit.schedule(day)}
</h3>

<img src=/rajavauni.avif alt="Rojava University">