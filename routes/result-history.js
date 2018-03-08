
/*
 * GET settings page.
 */
exports.view = function(req, res) {
	res.render('result-history', {"link": "profile"}); 
}

exports.view2 = function(req, res) {
	res.render('result-history', {"link": "indexB"});
}

