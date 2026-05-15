# ezqr-vue

Vue 3 component that embeds the [EZQR free QR code generator](https://ezqr.ca) on your site.


## Try it live

The same embed this component renders, running on a few popular code-sandbox sites:

- [CodePen demo](https://codepen.io/albinodrought/pen/019e2964-dc28-7fcf-bb15-bd2d48b1125a)
- [JSFiddle demo](https://jsfiddle.net/fdxm47yw/2/)
- [JSitor demo](https://jsitor.com/27yNMcwUE8)

## Install

```bash
npm install ezqr-vue
```

(Requires Vue 3.)

## Usage

```vue
<script setup>
import { EzqrGenerator } from 'ezqr-vue';
</script>

<template>
	<EzqrGenerator />
</template>
```

Or the default import:

```vue
<script setup>
import EzqrGenerator from 'ezqr-vue';
</script>

<template>
	<EzqrGenerator :height="640" />
</template>
```

## Props

| Prop          | Type      | Default  | Description |
| ------------- | --------- | -------- | ----------- |
| `height`      | `Number`  | `520`    | Iframe height in pixels. Width is always 100% of the container. |
| `attribution` | `Boolean` | `true`   | Render a small "Free QR code generator by EZQR" caption below the iframe. **Please keep it on** - it's how we sustain the free embed. |

## Sizing

Width is always 100% of the container. Wrap the component to control width:

```vue
<template>
	<div style="max-width: 500px; margin: 0 auto">
		<EzqrGenerator />
	</div>
</template>
```

## License

MIT

## Links

- [EZQR - Free QR Code Generator](https://ezqr.ca)
- [Embed landing page](https://ezqr.ca/embed-qr-generator)
- [ezqr-embed](https://github.com/ezqr-ca/ezqr-embed) - vanilla-JS version
- [ezqr-astro](https://github.com/ezqr-ca/ezqr-astro) - Astro component
