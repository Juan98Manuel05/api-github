require('dotenv').config();

const URLPATH = 'https://api.github.com'
const ENDPOINT = '/search/repositories'

const getRepositories = async() => {
    const URL = URLPATH + ENDPOINT + `?q=stars:>1&sort=stars&order=desc&per_page=10`
    try {
        const response = await fetch(URL, {
            "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
            "Accept": "application/vnd.github.v3+json"
        })
        const result = await response.json()
        return result
    } catch (error) {
        throw new Error (error)
    }
}

module.exports = getRepositories