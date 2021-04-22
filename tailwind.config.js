module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#10798F',
                secondary: '#c8e6e6',
                action: '#ff912a'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}