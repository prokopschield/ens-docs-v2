const withNextra = require('nextra')({
    theme: './src/index.tsx',
    themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
    images: {
        loader: 'akamai',
        path: 'public/assets',
    },
});
