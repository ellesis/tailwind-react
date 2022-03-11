import React from 'react'
import LayoutNinja from '../layouts/LayoutNinja'
import BadgedCard from '../components/cards/BadgedCard'

const PageFood = () => {
  return (
    <LayoutNinja>
      <div>Food Ninjas</div>

      <div className="flex justify-center md:justify-end">
        <a href="#" className="btn-orange-outlined-rounded-full ">
          Log in
        </a>
        <a href="#" className="btn-orange-outlined-rounded-full ml-2">
          Sign up
        </a>
      </div>

      <header>
        <h2 className="title">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2">Latest Recipes</h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {/* card */}
          <BadgedCard imgUrl="img/stew.jpg" title="5 Bean Chili Stew" subTitle="Recipe by Mario" badge="25 mins" />
          <BadgedCard imgUrl="img/curry.jpg" title="Yellow Curry" subTitle="Recipe by Mario" badge="15 mins" />
          <BadgedCard imgUrl="img/noodles.jpg" title="Noodles" subTitle="Recipe by Mario" />
        </div>

        <h4 className="font-bold mt-12 pb-2">Most Popular</h4>

        <div></div>
      </div>

      <div className="flex justify-center">
        <div className="btn-rounded-full-hover-bigger bg-secondary-100 text-secondary-200">Load more</div>
      </div>
    </LayoutNinja>
  )
}

export default PageFood
