import React from "react";
export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
