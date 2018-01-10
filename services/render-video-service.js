const Ffmpeg = require('fluent-ffmpeg');

const LOCAL_CONFIG = require('../config/local-folders');
const FFMPEG_PATH = LOCAL_CONFIG.ffmpeg.path;
const FFPROBE_PATH = LOCAL_CONFIG.ffprobe.path;

function RenderVideoService() {}

RenderVideoService.prototype.init = () => {
    Ffmpeg.setFfmpegPath(FFMPEG_PATH);
    Ffmpeg.setFfprobePath(FFPROBE_PATH);
    console.log('============== rendering ==============');
};

module.exports = new RenderVideoService();
