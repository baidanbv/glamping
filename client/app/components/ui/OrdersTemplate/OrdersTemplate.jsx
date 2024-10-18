import React from 'react'

const OrdersTemplate = ({orders}) => {
  return (
    <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-accent">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Stay/Activity</th>
              <th className="px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((contact) => (
              <tr key={contact._id} className="border-b border-accent">
                <td className="px-4 py-2">{contact.name}</td>
                <td className="px-4 py-2">{contact.email}</td>
                <td className="px-4 py-2">{contact.subject}</td>
                <td className="px-4 py-2">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default OrdersTemplate