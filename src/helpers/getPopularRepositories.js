const getGitHubRepositories = require('../api/search/repositories')

const getPopularRepositories = async () => {
    try {
        const data = await getGitHubRepositories().then(repos => repos.items);
        return data
    } catch (error) {
        throw new Error("Fatal Error:" + error)
    }
}
module.exports = getPopularRepositories