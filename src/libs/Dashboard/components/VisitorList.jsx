import { FaEdit } from "react-icons/fa";

export const VisitorList = () => {
  const visitors = [
    { id: 5007, name: 'John', referredBy: 'Dr Self', total: 'Rs 200', paid: 'Rs 200', discount: '0.00', date: '2nd Jun 2023', status: 'Pending' },
    { id: 5008, name: 'Henery', referredBy: 'Dr MK Rathore', total: 'Rs 1200', paid: 'Rs 1200', discount: '0.00', date: '2nd Jun 2023', status: 'Approved' },
    { id: 5009, name: 'Jenifer', referredBy: 'Dr', total: 'Rs 500', paid: 'Rs 500', discount: '0.00', date: '2nd Jun 2023', status: 'Pending' },
    { id: 5010, name: 'David', referredBy: 'Dr', total: 'Rs 200', paid: 'Rs 200', discount: '0.00', date: '2nd Jun 2023', status: 'Approved' },
    { id: 5011, name: 'Pitter', referredBy: 'Dr', total: 'Rs 300', paid: 'Rs 300', discount: '0.00', date: '2nd Jun 2023', status: 'Approved' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Visitor List</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-2"># Id</th>
            <th>Patient Name</th>
            <th>Referred By</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Discount</th>
            <th>Visiting Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor.id} className="border-b border-gray-300">
              <td className="py-2">{visitor.id}</td>
              <td>{visitor.name}</td>
              <td className="text-yellow-500">{visitor.referredBy}</td>
              <td>{visitor.total}</td>
              <td>{visitor.paid}</td>
              <td>{visitor.discount}</td>
              <td>{visitor.date}</td>
              <td className={`font-semibold ${visitor.status === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>{visitor.status}</td>
              <td className="flex items-center space-x-2">
                <button className="text-yellow-500 underline">View Bill</button>
                <FaEdit className="text-purple-700 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};