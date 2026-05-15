/*!
 * ezqr-vue — Vue 3 component that embeds the EZQR free QR code generator.
 * Free QR code generator powered by https://ezqr.ca
 *
 * @license MIT
 */
import { defineComponent, h } from 'vue';

const DEFAULT_HEIGHT = 520;

export default defineComponent({
	name: 'EzqrGenerator',
	props: {
		height: { type: Number, default: DEFAULT_HEIGHT },
		attribution: { type: Boolean, default: true },
	},
	render() {
		const iframe = h('iframe', {
			src: 'https://ezqr.ca/embed',
			title: 'EZQR — Free QR Code Generator',
			loading: 'lazy',
			frameborder: '0',
			scrolling: 'no',
			style: {
				width: '100%',
				border: '0',
				display: 'block',
				height: this.height + 'px',
				maxWidth: '100%',
			},
		});

		if (!this.attribution) return iframe;

		const attrib = h(
			'p',
			{
				style: {
					fontSize: '12px',
					textAlign: 'center',
					margin: '8px 0',
					color: '#5d6d7e',
					fontFamily: 'sans-serif',
				},
			},
			[
				h(
					'a',
					{
						href: 'https://ezqr.ca/?utm_source=embed-vue',
						target: '_blank',
						rel: 'noopener',
						style: { color: '#1a6b3b', textDecoration: 'none' },
					},
					'Free QR code generator',
				),
				' by EZQR',
			],
		);

		return [iframe, attrib];
	},
});
