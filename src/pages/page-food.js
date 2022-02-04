import React from 'react'

const PageFood = () => {
  return (
    <>
      <div>Food Ninjas</div>

      {/* login buttons */}
      <div className='flex justify-center md:justify-end'>
        <a
          href='#'
          className='btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'
        >
          Log in
        </a>
        <a
          href='#'
          className='btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white ml-2 transition ease-out duration-500'
        >
          Sign up
        </a>
      </div>

      <header>
        <h2 className='title'>Recipes</h2>
        <h3 className='text-2xl font-semibold'>For Ninjas</h3>
      </header>

      <div>
        <h4 className='font-bold mt-12 pb-2'>Latest Recipes</h4>

        <div className='mt-8 grid lg:grid-cols-3 gap-10'>
          {/* card */}
          <div className='card hover:shadow-lg'>
            <img src='img/stew.jpg' alt='stew' />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>

          <div className='card hover:shadow-lg'>
            <img src='img/curry.jpg' alt='stew' />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>

          <div className='card hover:shadow-lg'>
            <img src='img/noodles.jpg' alt='stew' />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4 className='font-bold mt-12 pb-2'>Most Popular</h4>

        <div></div>
      </div>

      <div className='flex justify-center'>
        <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
          Load more
        </div>
      </div>
    </>
  )
}

export default PageFood
