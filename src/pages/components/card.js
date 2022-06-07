import React from 'react'

import ChitChat from '../../components/cards/ChitChat'
import AvatarCard from '../../components/cards/AvatarCard'
import BadgedCard from '../../components/cards/BadgedCard'

export default function PageCard() {
  return (
    <>
      <div className="title">Card Samples</div>
      {/* Card-01 */}
      <div className="pt-4">
        <ChitChat />
      </div>

      {/* Card-02 */}
      <div className="pt-4">
        <AvatarCard />
      </div>

      {/* Card-03 */}
      <div className="pt-4">
        <BadgedCard imgUrl="img/stew.jpg" title="5 Bean Chili Stew" subTitle="Recipe by Mario" badge="25 mins" />
      </div>

      {/* Card-04 */}
      <div className="pt-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4">
        {/* Card-05  */}
        <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
          <div className="w-full sm:w-1/3">
            <img
              className="object-cover w-full h-48"
              src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Flower and sky"
            />
          </div>
          <div className="flex-1 px-6 py-4">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
            <p className="leading-normal text-gray-700">
              Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum
              maiores sequi nam tenetur laud.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        {/* Card image with text over */}
        <div className="relative max-w-xs overflow-hidden rounded-lg shadow-lg">
          <img
            className="object-cover w-full h-48"
            src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Flower and sky"
          />
          <div className="absolute top-0 left-0 px-6 py-4">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
            <p className="leading-normal text-gray-100">
              Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum
              maiores sequi nam tenetur laud.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
