import React from 'react'
import PropTypes from 'prop-types'

export default function UserTable({color}) {
  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-sky-900 text-white')
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={'font-semibold text-lg ' + (color === 'light' ? 'text-gray-700' : 'text-white')}>
                Card Tables
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-sky-800 text-sky-300 border-sky-700')
                  }
                >
                  Project
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-sky-800 text-sky-300 border-sky-700')
                  }
                >
                  Budget
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-sky-800 text-sky-300 border-sky-700')
                  }
                >
                  Status
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-sky-800 text-sky-300 border-sky-700')
                  }
                >
                  Users
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-sky-800 text-sky-300 border-sky-700')
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-sky-800 text-sky-300 border-sky-700')
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require('../../assets/img/logo/bootstrap.jpg')}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-gray-600' : 'text-white')}>
                    Management System
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $2,500 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-orange-500 mr-2"></i> pending
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require('../../assets/img/avatar/boy.png')}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow"
                    ></img>
                    <img
                      src={require('../../assets/img/avatar/girl-p.png')}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require('../../assets/img/avatar/boy-green.png')}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require('../../assets/img/avatar/girl.png')}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{width: '60%'}}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  {/* <TableDropdown /> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

UserTable.defaultProps = {
  color: 'light'
}

UserTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
}
