/**
 * @author Sven Koelpin
 */

module.exports = server => {
    server.get('tweets', (req, res, next) => {
        const page = 0; //TODO read from query parameters. Hint: req.params
        const size = 0; //TODO read from query parameters  Hint: req.params
        const start = (page - 1) * size;

        const allTweets = []; //TODO use tweetservice, pass start + size as params
        res.send(allTweets);
        next();
    });
};
