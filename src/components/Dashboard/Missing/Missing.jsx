import React from 'react'
import Table  from 'react-bootstrap/Table'
import { TiTick } from 'react-icons/ti'

const Missing = ({data}) => {
  return (
    <div className='table'>
    <h2>MISSING RECORDS</h2>
    <p>Total number of missing tool records</p>
    <div className='table-item'>
    <Table striped bordered hover variant="dark" size='sm'>
      <thead>
        <tr>
          <th>id</th>
          <th>Name </th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Edited</th>
        </tr>
      </thead>
      <tbody>
      { data.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.edited ? <button className='true' type="submit" size='sm'><TiTick /></button>: 
                <button className='false' variant="primary" type="submit" size='sm'>x</button>}
                </td>
              </tr>
            ))} 
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Missing