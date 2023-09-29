# Copyright (c) 2023, Mehedi Abdullah and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Sales(Document):

	def before_save(self):
		total_amount = 0

		for item in self.item:
			item.amount = item.product_price * item.quantity
			total_amount += item.amount

			product = frappe.get_doc('Product', item.product_name)
			product.quantity -= item.quantity
			product.save()

		self.total_amount = total_amount - self.discount