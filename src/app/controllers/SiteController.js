class SiteController {

    home(req, res) {
        res.render('home')
    }

    searchPost(req, res) {
        console.log(req.body)
        res.render('search')
    }

    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController