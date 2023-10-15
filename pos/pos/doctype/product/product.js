// Copyright (c) 2023, Mehedi Abdullah and contributors
// For license information, please see license.txt


frappe.ui.form.on('Product', {
    product_title: function(frm) {
        // Your barcode generation logic goes here
        var barcodeValue = generateBarcode(frm.doc.product_title);

        // Set the value of the barcode field
        frm.set_value('barcode', barcodeValue);
    }

});

function generateBarcode(productTitle) {
    // Implement your barcode generation logic here.
    // For this example, we'll use a simple concatenation.
    return 'BARCODE-' + productTitle.replace(/\s+/g, '-').toUpperCase();
}

