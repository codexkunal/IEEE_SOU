import React, { useState, useEffect } from 'react';
import './Members.css';
import {members} from "../../data"  
import { Helmet } from 'react-helmet-async';


// for the initial names
function getInitials(name) {
  const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();
  return initials.length > 2 ? initials.substring(0, 2) : initials;
}


// for background color of profile pic
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Members() {
  const [query, setQuery] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 9;
  const pageNumbersToShow = 5;

  useEffect(() => {
    setFilteredMembers(
      members.filter(member =>
        member.name.toLowerCase().includes(query.toLowerCase()) ||
        member.department.toLowerCase().includes(query.toLowerCase()) ||
        member.designation.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

  const totalPageNumbers = Math.ceil(filteredMembers.length / membersPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  // pagination previous button function
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  // pagination next button function
  const handleNextPage = () => {
    if (currentPage < totalPageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const halfWindow = Math.floor(pageNumbersToShow / 2);
    let startPage = Math.max(1, currentPage - halfWindow);
    let endPage = Math.min(totalPageNumbers, currentPage + halfWindow);

    if (currentPage <= halfWindow) {
      endPage = Math.min(totalPageNumbers, pageNumbersToShow);
    } else if (currentPage + halfWindow >= totalPageNumbers) {
      startPage = Math.max(1, totalPageNumbers - pageNumbersToShow + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
     <Helmet>
      <title>Members</title>
      <meta name='description' content='ieee members , core committee'/>
      <link rel='canonical' href='http://localhost:5173/members'/>
    </Helmet>
    <div className="main-container">
      <div className="member-header">
        <h1>Members Directory</h1>
        <p>Welcome to our members directory. Here you can find information about our members.</p>
        <div className="search-bartotal-members">
          <input
            className="members-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for members"
            />
          <div className='members-count'>Total members : {members.length}</div>
          
        </div>
      </div>
      <div className="members-container">
        {currentMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <div className="profile-info">
                {member.profilePic ? (
                  <img src={member.profilePic} alt="Profile" className="profile-pic" loading='lazy'/>
                  ) : (
                    <div className="profile-pic initials" style={{ backgroundColor: getRandomColor() }}>
                    {getInitials(member.name)}
                  </div>
                )}
                <h2 className="name">{member.name}</h2>
              </div>
              <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="linkedin-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" loading='lazy'/>
              </a>
            </div>
            <div className="card-body">
              <p className="department">Department: {member.department}</p>
              <p className="designation">Designation: {member.designation}</p>
              <p className="joining-year">Enrolled: {member.joiningYear}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-control" onClick={handlePrevPage}>&lt;</button>
        {getPageNumbers().map(number => (
          <button
          key={number}
          onClick={() => paginate(number)}
          className={`page-number ${currentPage === number ? 'active' : ''}`}
          >
            {number}
            {/* <button className="page-control" onClick={handleNextPage}>&gt;</button> */}
          </button>
        ))}
        <button className="page-control" onClick={handleNextPage}>&gt;</button>
      </div>
    </div>
        </>
  );
}

export default Members;
