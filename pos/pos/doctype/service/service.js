// Copyright (c) 2023, Mehedi Abdullah and contributors
// For license information, please see license.txt

frappe.ui.form.on("Service", {
	customer: function(frm) {
        var barcodeValue = generateBarcode(frm.doc.customer);
        frappe.msgprint(barcodeValue)
        // Set the value of the barcode field
        frm.set_value('barcode', barcodeValue);
    }
});

function generateBarcode(customer) {
    // Implement your barcode generation logic here.
    // For this example, we'll use a simple concatenation.
    return 'SERVICE-' + customer.replace(/\s+/g, '-').toUpperCase();
}
