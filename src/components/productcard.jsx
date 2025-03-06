// productcard.jsx
import React from 'react';
import { ViewProductButton } from '../components/button';

const Productcard = () => {
    // Static product details
    const productImage = "https://akns-images.eonline.com/eol_images/Entire_Site/2021412/rs_640x640-210512180440-640.ecomm-Unique-Beauty-Products-1.jpg?fit=around%7C400:400&output-quality=90&crop=400:400;center,top"; // Placeholder image
    const productName = "Sample Product";
    const productPrice = "$19.99";

    return (
        <div className="card bg-white shadow-lg rounded-2xl p-4 max-w-sm">
            <img
                src={productImage}
                alt={productName}
                className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{productName}</h2>
            <p className="text-gray-600 text-base mb-4">{productPrice}</p>
            <ViewProductButton />
        </div>
    );
};

export default Productcard;
