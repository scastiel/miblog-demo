var path = require('path');
module.exports = {
    baseUrl: process.env.BASE_URL || 'https://scastiel.github.io/miblog-demo',
    title: 'Miblog demo',
    description: 'This is a demo blog using [Miblog](https://github.com/scastiel/miblog).',
    footer: 'All content distributed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license. Powered by [Miblog](https://github.com/scastiel/miblog).',
    nbPostsPerPage: 3,
    postsDirectory: path.join(__dirname, 'posts'),
    publicDirectory: path.join(__dirname, 'public'),
};
