class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('hihi');
    }
}

module.exports = new NewsController;