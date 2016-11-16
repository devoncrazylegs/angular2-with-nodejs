"use strict";
exports.productHelper = {
    processImagesAndDownloads: function (products) {
        for (var i = 0; i < products.length; i++) {
            products[i].images = products[i].files.filter(function (file) {
                return file.type === 'image';
            });
            products[i].downloads = products[i].files.filter(function (file) {
                return file.type === 'file';
            });
        }
        return products;
    }
};
//# sourceMappingURL=productHelper.js.map