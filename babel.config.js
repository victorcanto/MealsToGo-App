module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [
                        ".ios.js",
                        ".android.js",
                        ".js",
                        ".ts",
                        ".tsx",
                        ".json",
                    ],
                    alias: {
                        "@assets": "./assets",
                        "@components": "./src/components",
                        "@features": "./src/features",
                        "@infra": "./src/infra",
                        "@interfaces": "./src/interfaces",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};
