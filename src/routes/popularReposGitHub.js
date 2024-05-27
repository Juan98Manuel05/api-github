const { Router } = require("express");
const router = Router()
const getPopularRepositories = require('../helpers/getPopularRepositories')


router.get('/repositories', async(req, res) => {

    const repositories = await getPopularRepositories()
    const letNameRepos = repositories.map(repo => repo.name)

    if(repositories){
        res.status(200).json({
            "amount_repositories": repositories.length,
            "name_repos": letNameRepos,
            "repositories": repositories
        })
    }else{
        res.status(404).json({
            "error": true,
            "message": "Resource Not Found"
        })
    }
})

module.exports =  router