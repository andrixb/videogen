const fs = require('fs');
const _ = require('lodash');
const request = require('request');

const LOCAL_CONF = require('../config/local-folders.json');

function DownloadImgsService() {} 

DownloadImgsService.prototype.init = (data) => { 
    createBaseFolder();
    getResources(data);
};

var createBaseFolder = () => {
    try {
        fs.mkdir(LOCAL_CONF.base.path, () => {
            console.log('written');
        });
    } catch(err) {
        console.log(`ERROR ${err}`);
        throw err;
    }
};

var getResources = (data) =>  {
    _.each(data, (item) => {
        let imgName = item['url'].split('/')[4];
        download(item['url'], imgName, () => {
            console.log('DOWNLOADING: ', imgName);
        });
    });
}

var download = (uri, filename, callback) => {
    const file = `${LOCAL_CONF.base.path}${filename}`;

    request.head(uri, (err, res, body) => {
        let r = request(uri).pipe(fs.createWriteStream(file));
        r.on('close', callback);
        r.on('error', error);
    });
}

var error = (message) => {
  console.log(message);
};

module.exports = new DownloadImgsService();
