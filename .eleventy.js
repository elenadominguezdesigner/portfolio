module.exports = function (eleventyConfig) {
eleventyConfig.addPassthroughCopy("./src/images/");
eleventyConfig.addPassthroughCopy("./src/css/");
eleventyConfig.addPassthroughCopy("./src/scripts/");

eleventyConfig.addWatchTarget("./src/css/");

eleventyConfig.addCollection("orderedPages", function(collectionApi) {
    return collectionApi.getAll().filter(page => !page.inputPath.endsWith("index.md")).sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
});

    return {
        dir: {
            input: "src",
            output: "docs"
        },
        serverOptions: {
            showAllHosts: true
        }
    };
};