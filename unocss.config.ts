import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    // presetWebFonts,
    transformerDirectives,
    // transformerVariantGroup,
} from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
    shortcuts: [],
    presets: [
        presetUno(),
        presetRemToPx(),
        presetAttributify(),
        presetIcons({
            scale: 1,
            warn: true,
            extraProperties: {
                display: 'inline-block',
            },
        }),
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: 'var(--ep-color-primary)',
                dark: '#4E6FB1',
            },
            success: {
                light: '#4ACC0A',
                DEFAULT: 'var(--ep-color-success)',
            },
            warning: {
                light: '#FCF1DC',
                DEFAULT: 'var(--ep-color-warning)',
            },
            info: {
                DEFAULT: 'var(--ep-color-info)',
            },
            danger: {
                DEFAULT: 'var(--ep-color-danger)',
            },
            disabled: {
                DEFAULT: 'var(--ep-disabled-text-color)',
            },
        },
    },
    transformers: [transformerDirectives()],
});
