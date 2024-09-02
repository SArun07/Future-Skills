import React, { useState } from 'react';

function Dashboard() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const highlightText = (text) => {
        if (!searchQuery) return text;

        const regex = new RegExp(`(${searchQuery})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
            part.toLowerCase() === searchQuery ? (
                <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <div className="main">
            <div className="main1">
                <div className="main11">
                    <p>How can we help?</p>
                    <div className='input-container'>
                        <label htmlFor="fname"></label>
                        <input 
                            type="text" 
                            id="fname" 
                            name="firstname" 
                            placeholder="Search" 
                            onChange={handleInputChange} 
                        />
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                </div>
            </div>
            <div className="main2">
                <div className="main21">
                    <h3>{highlightText('Branches')}</h3>
                    <hr />
                    <p>{highlightText('Abstract Branches lets you manage, version, and document your design in one place.')}</p>
                </div>
                <div className="main22">
                    <h3>{highlightText('Manage your account')}</h3>
                    <hr />
                    <p>{highlightText('Configure your account settings, such as your email, profile details and passwords.')}</p>
                </div>
            </div>
            <div className="main2">
                <div className="main21">
                    <h3>{highlightText('Manage organizations, teams and projects')}</h3>
                    <hr />
                    <p>{highlightText('Use Abstract organizations, teams and projects to organize your people and your work.')}</p>
                </div>
                <div className="main22">
                    <h3>{highlightText('Manage billing')}</h3>
                    <hr />
                    <p>{highlightText('Change subscriptions and payment details.')}</p>
                </div>
            </div>
            <div className="main2">
                <div className="main21">
                    <h3>{highlightText('Authenticate to Abstract')}</h3>
                    <hr />
                    <p>{highlightText('Set up and configure SSO, SCIM, and just-in-Time provisioning.')}</p>
                </div>
                <div className="main22">
                    <h3>{highlightText('Abstract support')}</h3>
                    <hr />
                    <p>{highlightText('Get in touch with a human.')}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
