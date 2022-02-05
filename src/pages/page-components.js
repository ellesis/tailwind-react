import React from 'react'
import ChitChat from '../components/cards/chit-chat'
import AvatarCard from '../components/cards/avatar-card'

const PageComponents = () => {
  return (
    <>
      <div className='title'>Components Sample</div>
      <div className='pt-4'>
        <ChitChat />
      </div>
      <div className='pt-4'>
        <AvatarCard />
      </div>

      <div className='title'>Buttons Sample</div>
      <div>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
          Save changes
        </button>

        <BtnPrimary>Primary Button</BtnPrimary>

        <button
          className='mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded'
          type='submit'
        >
          Submit
        </button>
      </div>

      <div className='title'>Radio Button</div>
      <div>
        <label className='ml-8 inline-block'>
          <input
            className='mt-4 mr-1'
            name='jobtype'
            type='radio'
            // ref={register({
            //   required: 'Please select a job type'
            // })}
          />
          Part time
        </label>
      </div>

      {/* New Component */}
      <div className='title'>Form Sample</div>
      <div>
        <div className='w-full max-w-xs'>
          <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='Username'
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
              <input
                className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='******************'
              />
              <p className='text-red-500 text-xs italic'>Please choose a password.</p>
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
              >
                Sign In
              </button>
              <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
                Forgot Password?
              </a>
            </div>
          </form>
          <p className='text-center text-gray-500 text-xs'>&copy;2020 Acme Corp. All rights reserved.</p>
        </div>
      </div>

      {/* New Component */}
      <div className='title'>Combo Select</div>
      <div className='inline-block relative w-64'>
        <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
          <option>Really long option that will likely overlap the chevron</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </div>
      </div>

      {/* New Component */}
      <div className='title'>Cards-01</div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-full' src='/img/card-top.jpg' alt='Sunset in the mountains' />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
          <p className='text-gray-700 text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #photography
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #travel
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            #winter
          </span>
        </div>
      </div>

      {/* Table */}
      <div className='title'>Table-1</div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full'>
                <thead className='border-b'>
                  <tr>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                      #
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                      First
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                      Last
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>1</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Mark</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Otto</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>@mdo</td>
                  </tr>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>2</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Jacob</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Thornton</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>@fat</td>
                  </tr>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>3</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Larry</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Wild</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Table-small */}
      <div className='title'>Table-small</div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-center'>
                <thead className='border-b bg-white'>
                  <tr>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-2'>
                      #
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-2'>
                      First
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-2'>
                      Last
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-2'>
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>1</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap'>Mark</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap'>Otto</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap'>@mdo</td>
                  </tr>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>2</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap'>Jacob</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap'>Thornton</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap'>@fat</td>
                  </tr>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>3</td>
                    <td
                      colspan='2'
                      className='text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap text-center'
                    >
                      Larry the Bird
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap'>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Table-Bordered */}
      <div className='title'>Table-Bordered</div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full border text-center'>
                <thead className='border-b'>
                  <tr>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 border-r'>
                      #
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 border-r'>
                      First
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 border-r'>
                      Last
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4'>
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r'>1</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r'>Mark</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r'>Otto</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>@mdo</td>
                  </tr>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r'>2</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r'>Jacob</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r'>Thornton</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>@fat</td>
                  </tr>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r'>3</td>
                    <td
                      colspan='2'
                      className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r'
                    >
                      Larry the Bird
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Table2 */}
      <div className='title'>Table-2</div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-center'>
                <thead className='border-b'>
                  <tr>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4'>
                      Class
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4'>
                      Heading
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4'>
                      Heading
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>Default</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                  </tr>
                  <tr className='border-b bg-blue-100 border-blue-200'>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>Primary</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                  </tr>
                  <tr className='border-b bg-purple-100 border-purple-200'>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>Secondary</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                  </tr>
                  <tr className='border-b bg-green-100 border-green-200'>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>Success</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                  </tr>
                  <tr className='border-b bg-red-100 border-red-200'>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>Danger</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                  </tr>
                  <tr className='border-b bg-yellow-100 border-yellow-200'>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>Warning</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                  </tr>
                  <tr className='border-b bg-indigo-100 border-indigo-200'>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>Info</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                  </tr>
                  <tr className='border-b bg-gray-50 border-gray-200'>
                    <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>Light</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                  </tr>
                  <tr className='border-b bg-gray-800 boder-gray-900'>
                    <td className='text-sm text-white font-medium px-6 py-4 whitespace-nowrap'>Dark</td>
                    <td className='text-sm text-white font-light px-6 py-4 whitespace-nowrap'>Cell</td>
                    <td className='text-sm text-white font-light px-6 py-4 whitespace-nowrap'>Cell</td>
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

function BtnPrimary(props) {
  return (
    <button className='bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600'>{props.children}</button>
  )
}

export default PageComponents
