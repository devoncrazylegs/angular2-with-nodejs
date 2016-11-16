export var productHelper = {
    processImagesAndDownloads(products) {
        for(var i =0; i < products.length; i++) {
            products[i].images = products[i].files.filter((file) => {
                return file.type === 'image';
            });

            products[i].downloads = products[i].files.filter((file) => {
                return file.type === 'file';
            });
        }
        return products;
    }
};