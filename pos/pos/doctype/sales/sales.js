// Copyright (c) 2023, Mehedi Abdullah and contributors
// For license information, please see license.txt

frappe.ui.form.on("Sales", {
    refresh: function(frm){
        frm.set_value("invoice_date", frappe.datetime.now_datetime());    }
});


frappe.ui.form.on("Item", {
    // This function will be triggered when the "quantity" field in the "Item" form is updated
    quantity: function(frm, cdt, cdn) {
        var child = locals[cdt][cdn];  // Get the child table row
        var quantity = child.quantity; // Get the value of the "quantity" field in the child table
        var price = child.product_price;

        var amount = quantity * price;

        frappe.model.set_value(child.doctype, child.name, 'amount', amount);
    }
});






