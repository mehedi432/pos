// Copyright (c) 2023, Mehedi Abdullah and contributors
// For license information, please see license.txt

frappe.ui.form.on("Sales", {
	receive_amount: function(frm){
        console.log(frm.doc.receive_amount)
    }
});


frappe.ui.form.on("Item", {
    quantity: function(cdt, cdn, frm){
        print(cdt, cdn)
    }
})

