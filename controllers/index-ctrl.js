var IndexCtrl = function () {};

IndexCtrl.prototype.init = (req, res, next) => {
    this.req = req;
    this.res = res;
    this.next = next;
};

module.exports = new IndexCtrl();
