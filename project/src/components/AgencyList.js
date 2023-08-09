import React from "react";

function AgencyList({ selectedCategory, agencies }) {
    const filteredAgencies = agencies.filter(
        (agency) => agency.category === selectedCategory
    );
    return (
        <div className="agencies-list">
            {filteredAgencies.map((agency) => (
                <div key={agency.id} className="agency">
                    <h4>Name: {agency.name}</h4>
                    <p>Address: {agency.fulladdress}</p>
                    <p>Phone: {agency.phone}</p>
                    <p>Website: <a href={agency.website}>{agency.website}</a></p>
                    <p>Opening Hours: {agency.opening_hours}</p>
                </div>
            ))}
        </div>
    );
}
export default AgencyList