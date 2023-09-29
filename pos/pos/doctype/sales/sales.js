// Copyright (c) 2023, Mehedi Abdullah and contributors
// For license information, please see license.txt

frappe.ui.form.on("Sales", {
	
});

frappe.ui.form.on("Item", {
    quantity: function(frm) {
        // Your barcode generation logic goes here
        var amountValue = generateAmount(frm.doc.quantity, frm.doc.product_price);
        
        // Set the value of the amount field
        frm.set_value('amount', amountValue);
    }
});

function generateAmount(productQuantity, productPrice) {
    // Implement your barcode generation logic here.
    // For this example, we'll use a simple concatenation.
    return productQuantity * productPrice;
}
