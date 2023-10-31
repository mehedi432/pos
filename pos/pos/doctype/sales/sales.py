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

		self.total_due    = total_amount - self.receive_amount
		self.total_amount = total_amount - self.discount

		customer         = frappe.get_doc('Customer', self.customer)
		
		# Get the previous values
		previous_receive = customer.total_receive
		previous_dues    = customer.total_due

		if customer.total_receive == 0 or customer.total_due == 0:
			customer.total_receive = self.receive_amount
			customer.total_due     = self.total_due
		else:
			customer.total_receive = previous_receive + self.receive_amount
			customer.total_due     = previous_dues + self.total_due
		
		customer.save()
