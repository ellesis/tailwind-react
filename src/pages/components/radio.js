import React from 'react'

export default function PageRadio() {
  return (
    <>
      <div className="title">Radio Button</div>
      <div>
        <label className="ml-8 inline-block">
          <input
            className="mt-4 mr-1"
            name="jobtype"
            type="radio"
            // ref={register({
            //   required: 'Please select a job type'
            // })}
          />
          Radio Button
        </label>
      </div>
    </>
  )
}
