import React from 'react';
import Head from 'next/head';

const about = () => {

  const members = [
    {
      position: 'CEO',
      name: 'John Doe',
      age: 30,
      address: '123 Main St'
    },
    {
      position: 'CTO',
      name: 'Jane Doe',
      age: 25,
      address: '123 Main St'
    },
    {
      position: 'CFO',
      name: 'Bob Smith',
      age: 35,
      address: '123 Main St'
    },
    {
      position: 'Engineer',
      name: 'Mary Smith',
      age: 40,
      address: '123 Main St'
    },
    {
      position: 'Programmer',
      name: 'Tom Smith',
      age: 45,
      address: '123 Main St'
    },
    {
      position: 'Developer',
      name: 'Larry Smith',
      age: 50,
      address: '123 Main St'
    }
  ];

  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <main>
        <h1>Our Members ...</h1>
        <div className="members">
          {members.map((member, index) => (
            <div key={index} className='member__card'>
              <h1>{member.position}</h1>
              <p><span>Name:</span>{member.name}</p>
              <p><span>Age:</span>{member.age}</p>
              <p><span>Address: </span>{member.address}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default about;