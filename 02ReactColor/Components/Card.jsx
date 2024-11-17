import React from 'react'

function Card({imageUrl ,movieName}) {
  return (
    

<div className="max-w-[12rem] max-h-fit bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-32 object-cover rounded-t-lg"
        src={imageUrl}
        alt={movieName}
      />
      <div className="p-3 flex-col">
        <h2 className="text-sm font-bold text-yellow-300 truncate">
          {movieName}
        </h2>
        <p className="text-xs text-gray-600 mt-1 line-clamp-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis voluptatibus voluptatum, doloremque placeat vitae quis, ea accusamus dolorem eos aspernatur ex aut recusandae id rerum in obcaecati similique veniam.
        </p>
      </div>
    </div>
  )
}

export default Card