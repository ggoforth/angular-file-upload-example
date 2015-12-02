var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({dest: 'uploads/'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('file'), function (req, res) {
  console.log('THE FILES: ', req.file);
  res.json(req.file);
});

module.exports = router;
