module.exports = {
    plugins: {
        "postcss-import": {},
        "postcss-preset-env": {
            stage: 0
        },
        autoprefixer: {},
        ...(process.env.NODE_ENV === "production" ? {cssnano: {}} : {})
    }
};
