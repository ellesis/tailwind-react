import React from 'react'

export default function PageTable() {
  const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    }
  ]

  return (
    <>
      {/* Table */}
      <div className="title">Table-1</div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      First
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Last
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Jacob</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Thornton</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@fat</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Larry</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Wild</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Table-small */}
      <div className="title">Table-small</div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-white">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-2">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-2">
                      First
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-2">
                      Last
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-2">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">Mark</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">Otto</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">@mdo</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">Jacob</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">Thornton</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">@fat</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td
                      colSpan="2"
                      className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap text-center"
                    >
                      Larry the Bird
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Table-Bordered */}
      <div className="title">Table-Bordered</div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                      First
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                      Last
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">1</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">Mark</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">Otto</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">2</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">Jacob</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">Thornton</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@fat</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">3</td>
                    <td
                      colSpan="2"
                      className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                    >
                      Larry the Bird
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Table-people */}
      <div className="title">Table-people</div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="person" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                            <div className="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.title}</div>
                        <div className="text-sm text-gray-500">{person.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Table2 */}
      <div className="title">Table-2</div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Class
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Heading
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Heading
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Default</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                  </tr>
                  <tr className="border-b bg-blue-100 border-blue-200">
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Primary</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                  </tr>
                  <tr className="border-b bg-purple-100 border-purple-200">
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Secondary</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                  </tr>
                  <tr className="border-b bg-green-100 border-green-200">
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Success</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                  </tr>
                  <tr className="border-b bg-red-100 border-red-200">
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Danger</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                  </tr>
                  <tr className="border-b bg-yellow-100 border-yellow-200">
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Warning</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                  </tr>
                  <tr className="border-b bg-indigo-100 border-indigo-200">
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Info</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                  </tr>
                  <tr className="border-b bg-gray-50 border-gray-200">
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">Light</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                  </tr>
                  <tr className="border-b bg-gray-800 boder-gray-900">
                    <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">Dark</td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">Cell</td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">Cell</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
