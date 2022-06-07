import React from 'react'

export default function ComboBadge({comboLists}) {
  return (
    <>
      <div className="" style="display: none; margin-right: 5px">
        <button>
          <div id="reviewRiskTitle">Risk: High ...</div>
          <div id="reviewRiskBadge" className="badge">
            +2
          </div>
          <div className="caret"></div>
        </button>
        <div className="tooltiptext2" style="top: 41px">
          <div id="reviewRiskFilterTooltip" style="width: 158px">
            High, Medium, Low, false Risk
          </div>
          <span className="arrowtop"></span>
        </div>
        <ul
          id="ReviewFilterGroup"
          role="menu"
          className="dropdown-menu"
          aria-labelledby="bg-nested-dropdown"
          style="
                    min-width: 150px;
                    max-width: 170px;
                    text-overflow: clip;
                    max-height: 357px;
                    overflow-y: auto;
                    overflow-x: hidden;
                    padding: 5px;
                  "
        >
          {comboLists.map()}
          <li>
            <input type="checkbox" className="checkReviewFilter" value="8" checked />
            <span className="translate" data-args="MESS_UI4_High">
              High
            </span>
          </li>
          <li>
            <input type="checkbox" className="checkReviewFilter" value="4" checked />
            <span className="translate" data-args="MESS_UI4_Med">
              Medium
            </span>
          </li>
          <li>
            <input type="checkbox" className="checkReviewFilter" value="1" checked />
            <span className="translate" data-args="MESS_UI4_Low">
              Low
            </span>
          </li>
          <li>
            <input type="checkbox" className="checkReviewFilter" value="2" />
            <span className="translate" data-args="MESS_False">
              False
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}
