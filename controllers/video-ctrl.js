const async = require('async');
const downloadImgsService = require('../services/download-imgs-service');
const renderVideoService = require('../services/render-video-service');

const ASSETS_SRC = require('../assets');

var VideoCtrl = function () {};

VideoCtrl.prototype.init = (req, res, next) => {
    this.req = req;
    this.res = res;
    this.next = next;
};

VideoCtrl.prototype.executeRendering = () => {
    async.waterfall([
        downloadImgsService.init(ASSETS_SRC.images),
        renderVideoService.init()
    ], (err, result) => {
        console.log('PROCESSED');
    });
}

module.exports = new VideoCtrl();
