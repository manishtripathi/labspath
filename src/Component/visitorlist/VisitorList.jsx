import React from 'react'

const VisitorList = ({visitors}) => {
  return (
    <>
         <div className='visitor-list'>
            <h3>
                Visitor List
            </h3>

            <table>
                <thead>
                    <tr>
                        <th># Id</th>
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
                    {visitors.map((visitor)=> (
                        <tr key={visitor.id}>
                             <td>{visitor.id}</td>
                            <td>{visitor.name}</td>
                            <td>{visitor.refferedBy}</td>
                            <td>{visitor.total}</td>
                            <td>{visitor.paid}</td>
                            <td>{visitor.discount}</td>
                            <td>{visitor.visitingDate}</td>
                            <td>{visitor.status}</td>
                           
                            <td>
                                <Link> View Bill</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
    </>
    
  )
}

export default VisitorList