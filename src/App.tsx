import React from 'react';
import DataTable from './components/table/DataTable';

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Age', accessor: 'age' },
  { header: 'Email', accessor: 'email' },
  { header: 'Mobile Number', accessor: 'mobile_number' },
];

const data = [
  {
    name: 'Alexander Unabia',
    age: 27,
    email: 'unabialexander@example.com',
    mobile_number: '09123456789',
  },
  {
    name: 'Baby Mendoza',
    age: 34,
    email: 'mendozababy@example.com',
    mobile_number: '09323456789',
  },
  {
    name: 'Alice Guo',
    age: 50,
    email: 'guoalice@example.com',
    mobile_number: '09273456789',
  },
  {
    name: 'Jonel Lanz',
    age: 22,
    email: 'lanzjonel@example.com',
    mobile_number: '09193456789',
  },
];

function App() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="inline-flex text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-gradient-x-swipe">
        List of Users
      </h1>
      <div className="text-left animate-swipe-up">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}


export default App;
