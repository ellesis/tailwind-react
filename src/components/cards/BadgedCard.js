import React from 'react'

/**
 <BadgedCard imgUrl, title={} subTitle={} badge={'77'} />
 */
const BadgedCard = ({imgUrl, title = '', subTitle = '', badge = ''}) => {
  return (
    <div className="bg-white max-w-xs rounded overflow-hidden shadow-md relative hover:shadow-lg">
      <img src={`${imgUrl}`} alt="Badged Card" className="w-fill sm:h-48 object-cover" />
      <div className="m-4">
        <span className="font-bold">{title}</span>
        <span className="block text-gray-500 text-sm">{subTitle}</span>
      </div>
      {/* badge */}
      {badge && (
        <div className="bg-secondary bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
          <span>{badge}</span>
        </div>
      )}
    </div>
  )
}

export default BadgedCard
