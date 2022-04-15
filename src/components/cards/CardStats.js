import React from 'react'
import PropTypes from 'prop-types'

import {MdMonitor} from 'react-icons/md'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescription,
  statIcon,
  statIconColor
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-slate-400 uppercase font-bold text-xs">{statSubtitle}</h5>
              <span className="font-semibold text-xl text-slate-700">{statTitle}</span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  'text-white text-lg p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ' +
                  statIconColor
                }
              >
                {statIcon}
              </div>
            </div>
          </div>
          <p className="flex text-sm text-slate-400 mt-4">
            <span className={statPercentColor + ' mr-2 flex'}>
              {statArrow === 'up' ? <FaArrowUp /> : statArrow === 'down' ? <FaArrowDown /> : ''} {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescription}</span>
          </p>
        </div>
      </div>
    </>
  )
}

CardStats.defaultProps = {
  statSubtitle: 'Traffic',
  statTitle: '350,897',
  statArrow: 'up',
  statPercent: '3.48',
  statPercentColor: 'text-emerald-500',
  statDescription: 'Since last month',
  statIcon: <MdMonitor />,
  statIconColor: 'bg-red-500'
}

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(['up', 'down']),
  statPercent: PropTypes.string,
  statPercentColor: PropTypes.string,
  statDescription: PropTypes.string,
  statIcon: PropTypes.object,
  statIconColor: PropTypes.string
}
