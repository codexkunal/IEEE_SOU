import React, { useEffect, useState } from 'react'
import './Event.css'
import { IoSearchSharp } from "react-icons/io5";
import image from '/aiml.jpg';
import { Helmet } from 'react-helmet-async';
import { Events } from '../../EventData';

function Event() {
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredEvents, setFilteredEvents] = useState(Events);
    const membersPerPage = 8;
    const pageNumbersToShow = 5;

    useEffect(() => {
        setFilteredEvents(
          Events.filter(e =>
            e.title.toLowerCase().includes(query.toLowerCase()) ||
            e.description.toLowerCase().includes(query.toLowerCase()) 
          )
        );
      }, [query]);


    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPageNumbers) {
            setCurrentPage(currentPage + 1);
        }
    };

    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const totalPageNumbers = Math.ceil(filteredEvents.length / membersPerPage);
    const currentEvents = filteredEvents.slice(indexOfFirstMember, indexOfLastMember);

    const paginate = pageNumber => setCurrentPage(pageNumber);


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
                <title>Events</title>
                <meta name='description' content='know everything about ieee events, learn all together from events' />
                <link rel='canonical' href='http://localhost:5173/events' />
            </Helmet>
            <div id='main'>
                <div className='Event-Title'>
                    <h1>Events</h1>
                    <p>Here are some glimpses of the events organized by IEEE SOU SB</p>
                    <div>
                        <a href="#Home">Home</a>
                        <span>&nbsp; / &nbsp;Event</span>
                    </div>
                </div>

                <div className='event-content'>
                    <div className='event-content-search'>
                        <div className='event-content-search-icon'>
                            <div className='search-area'>
                                <input type="text" placeholder='Search by Name or Speaker' onChange={(e) => setQuery(e.target.value)} value={query} />
                                <IoSearchSharp className='search-icon' />
                            </div>
                        </div>
                        <div className='Total-event'>
                            <span>Total Events : 71</span>
                        </div>
                    </div>


                    <div className='event-all-component'>

                        {currentEvents.map((e) => (


                            <div className='event-component' key={e.id}>
                                <div className='event-component-img'>
                                    <img src={image} alt='event-image' loading='lazy' />
                                </div>

                                <div className='event-component-desc'>
                                    <h1>{e.title}</h1>
                                    <span className='time-and-date'>{e.date}</span>
                                    <p>{e.description}</p>
                                    <button>Read more</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*                 
                <div className='pagination'>
                    <a href="#"><IoIosArrowBack /></a>
                    <a href="#" className='active'>1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#"><MdNavigateNext /></a>
                </div> */}

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

            </div>
        </>
    )
}

export default Event
