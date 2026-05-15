<script setup>
import EzqrGenerator from '../src/EzqrGenerator.js';
</script>

<template>
	<main style="max-width: 720px; margin: 2em auto; padding: 0 1em; font-family: sans-serif">
		<h1 style="font-size: 1.4em">ezqr-vue — minimal example</h1>
		<p style="color: #5d6d7e; font-size: 0.9em">
			Paste a link into the generator below and download a free QR code.
		</p>

		<div style="max-width: 500px; margin: 0 auto">
			<EzqrGenerator />
		</div>
	</main>
</template>
