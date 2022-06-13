module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                toolShopTheme: {
                    primary: "#242F9B",
                    secondary: "#646FD4",
                    accent: "#9BA3EB",
                    neutral: "#DBDFFD",
                    "base-100": "#ffffff",
                    "base-200": "#000000",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
