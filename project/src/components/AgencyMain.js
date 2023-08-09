import React, { useEffect, useState } from "react";
import AgencyCard from "./AgencyCard";
import AgencyList from "./AgencyList";
import AgencyMaps from "./AgencyMaps"

function AgencyMain() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [agencies, setAgencies] =useState([]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(()=>{
        fetch ('/agencies')
        .then (response => response.json())
        .then (agencies =>setAgencies(agencies))
    }, []);



    const categories = [
        { name: 'Legal services', image: "https://i.ibb.co/XXfZjrq/Legal-Services.jpg"},
        { name: 'Health', image: "https://i.ibb.co/ZY0DZZK/health-service.jpg"},
        { name: 'Housing', image: "https://i.ibb.co/HqMK3Ct/housing-services.jpg"},
        { name: 'Food', image: "https://i.ibb.co/kDWJr5m/food-services.jpg" },
    ];

    return (
        <div>
            <AgencyMaps selectedCategory={selectedCategory} />
            <div className="category-cards">
                {categories.map((category) => (
                    <AgencyCard
                        key={category.name}
                        name={category.name}
                        image={category.image}
                        onClick={handleCategoryClick}
                    />
                ))}
            </div>
            {selectedCategory && <AgencyList selectedCategory={selectedCategory} agencies = {agencies} />}
        </div>
    );
}

export default AgencyMain;