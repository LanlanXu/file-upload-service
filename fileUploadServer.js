/*
	
	�ļ��ϴ������ node�ӿ�--����ǰ���ϴ����ļ�

*/

var fs = require('fs');
var express = require('express');
var app = express();
var formidable = require('formidable');

app.post('/upload', function(req, res) {//ǰ�˵��õ�ַ��  http://ip:8000/upload
  var form = new formidable.IncomingForm(),
    data;

  // formidable �������ÿ��Բο� github ��˵��
  form.uploadDir = './uploads';
  form.encoding = 'utf-8';
  form.keepExtensions = true;
  form.maxFieldsSize = 1024 * 1024 * 50; // 50MB

  form.parse(req, function(err, fields, files) {
    console.log('on parse');
    res.writeHead(200, {'content-type': 'text/plain'});
    data = files.fileToUpload;
    res.end(JSON.stringify(data));//���ص��ý��
  });

  // ���ǿ������ļ��ϴ���ɺ��Ƶ������ļ���Ŀ��Ŀ¼
  form.on('end', function() {
    fs.renameSync(data.path, './uploads/'+ data.name);
  });
});


var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
