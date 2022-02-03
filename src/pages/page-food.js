import React from 'react'

const PageFood = () => {
  return (
    <>
      <div>PageFood</div>

      <div>
        <a href="#">Log in</a>
        <a href="#">Sign up</a>
      </div>

      <header>
        <h2>Recipes</h2>
        <h3>For Ninjas</h3>
      </header>

      <div>
        <h4>Latest Recipes</h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <div className="card">
            <img src="img/stew.jpg" alt="stew" />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
          <div className="card">
            <img src="img/curry.jpg" alt="stew" />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
          <div className="card">
            <img src="img/noodles.jpg" alt="stew" />
            <div>
              <span>5 Bean Chili Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

        <h4>Most Popular</h4>

        <div></div>
      </div>

      <div>
        <div>Load more</div>
      </div>
    </>
  )
}

export default PageFood
