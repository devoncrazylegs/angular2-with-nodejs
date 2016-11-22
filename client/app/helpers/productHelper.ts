export var productHelper = {
    processImagesAndDownloads(products) {
        for(var i = 0; i < products.length; i++) {
            products[i].images = products[i].files.filter((file) => {
                return file.type === 'image';
            });

            products[i].downloads = products[i].files.filter((file) => {
                return file.type === 'file';
            });
        }
        return products;
    },

    processLinkedFiles(products, files) {
        for(var i = 0; i < products.length; i++) {
            products['productsIdArray'] = files.filter((file) => {
                if(file.id === products[i].id) {
                    return file.id;
                }
            });
        }
    }
};