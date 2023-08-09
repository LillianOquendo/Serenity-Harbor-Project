import React from "react";

function AgencyCard({ name, image, onClick }) {
    return (
        <div className="category-card cursor-pointer" onClick={() => onClick(name)}>
            <h2 className="text-center text-lg font-semibold mt-2">{name}</h2>
            <img src={image} alt={name} className="w-full h-auto" />
        </div>
    );
}

export default AgencyCard;
