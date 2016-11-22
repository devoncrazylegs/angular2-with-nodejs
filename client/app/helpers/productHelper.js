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
    },
    processLinkedFiles: function (products, files) {
        for (var i = 0; i < products.length; i++) {
            products['productsIdArray'] = files.filter(function (file) {
                if (file.id === products[i].id) {
                    return file.id;
                }
            });
        }
    }
};
//# sourceMappingURL=productHelper.js.map