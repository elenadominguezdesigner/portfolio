module.exports = async function (eleventyConfig) {
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
        pathPrefix: "/portfolio/"
    });

    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/scripts/");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addCollection("orderedPages", function(collectionApi) {
        return collectionApi.getAll()
            .filter(page => !page.inputPath.endsWith("index.md"))
            .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
    });

    return {
        dir: {
            input: "src",
            output: "docs"
        },
        pathPrefix: "/portfolio/",
        serverOptions: {
            showAllHosts: true
        }
    };
};
