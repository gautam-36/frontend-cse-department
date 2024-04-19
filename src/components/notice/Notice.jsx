import React, { useState } from 'react';
import './notice.css';

const Notice = () => {
    const [activeTab, setActiveTab] = useState('announcements');

    const announcements = [
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
        { id: 1, date: '28 MAR', content: 'Your announcement content' },
        { id: 2, date: '03 APR', content: 'Your announcement content' },
        { id: 3, date: '28 MAR', content: 'Your announcement content' },
    ];

    const seminarsWorkshops = [
        { id: 1, date: '01 MAY', content: 'Your seminar/workshop content' },
        { id: 2, date: '15 MAY', content: 'Your seminar/workshop content' },
        { id: 1, date: '01 MAY', content: 'Your seminar/workshop content' },
        { id: 2, date: '15 MAY', content: 'Your seminar/workshop content' },
        { id: 1, date: '01 MAY', content: 'Your seminar/workshop content' },
        { id: 2, date: '15 MAY', content: 'Your seminar/workshop content' },
    ];

    const tenderNotices = [
        { id: 1, date: '20 APR', content: 'Your tender notice content' },
    ];

    const jobListings = [
        { id: 1, date: '10 MAY', content: 'Your job listing content' },
        { id: 2, date: '25 MAY', content: 'Your job listing content' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'announcements':
                return announcements.map((announcement) => (
                    <div key={announcement.id} className="announcement">
                        <div className="date">{announcement.date}</div>
                        <div className="content">{announcement.content}</div>
                    </div>
                ));
            case 'seminarsWorkshops':
                return seminarsWorkshops.map((seminar) => (
                    <div key={seminar.id} className="announcement">
                        <div className="date">{seminar.date}</div>
                        <div className="content">{seminar.content}</div>
                    </div>
                ));
            // case 'tenderNotices':
            //     return tenderNotices.map((notice) => (
            //         <div key={notice.id} className="announcement">
            //             <div className="date">{notice.date}</div>
            //             <div className="content">{notice.content}</div>
            //         </div>
            //     ));
            // case 'jobListings':
            //     return jobListings.map((job) => (
            //         <div key={job.id} className="announcement">
            //             <div className="date">{job.date}</div>
            //             <div className="content">{job.content}</div>
            //         </div>
            //     ));
            default:
                return null;
        }
    };

    return (
        
        <div className="announcements">
            <div className="header">
                <div
                    className={`tab ${activeTab === 'announcements' ? 'active' : ''}`}
                    onClick={() => setActiveTab('announcements')}
                >
                    Notices
                </div>
                <div
                    className={`tab ${activeTab === 'seminarsWorkshops' ? 'active' : ''}`}
                    onClick={() => setActiveTab('seminarsWorkshops')}
                >
                    Seminars/WorkShop
                </div>
                {/* <div
                    className={`tab ${activeTab === 'tenderNotices' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tenderNotices')}
                >
                    Tender Notices
                </div>
                <div
                    className={`tab ${activeTab === 'jobListings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('jobListings')}
                >
                    Job
                </div> */}
            </div>
            <div className="circular">{renderContent()}</div>
            <div className="view-all">
                View All 
            </div>
        </div>
    );
};

export default Notice;