var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/SvelteUIElements',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/saxenanihal95/SvelteUIElements.git',
        user: {
            name: 'Nihal Saxena',
            email: 'saxenanihal95@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)