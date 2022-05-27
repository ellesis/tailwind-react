import React from 'react'

export default function ComboBadge({comboLists}) {
  return (
    <>
      <div className="" style="display: none; margin-right: 5px">
        <button>
          <div id="reviewRiskTitle">Risk: High ...</div>
          <div id="reviewRiskBadge" class="badge">
            +2
          </div>
          <div class="caret"></div>
        </button>
        <div class="tooltiptext2" style="top: 41px">
          <div id="reviewRiskFilterTooltip" style="width: 158px">
            High, Medium, Low, false Risk
          </div>
          <span class="arrowtop"></span>
        </div>
        <ul
          id="ReviewFilterGroup"
          role="menu"
          class="dropdown-menu"
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
            <input type="checkbox" class="checkReviewFilter" value="8" checked />
            <span class="translate" data-args="MESS_UI4_High">
              High
            </span>
          </li>
          <li>
            <input type="checkbox" class="checkReviewFilter" value="4" checked />
            <span class="translate" data-args="MESS_UI4_Med">
              Medium
            </span>
          </li>
          <li>
            <input type="checkbox" class="checkReviewFilter" value="1" checked />
            <span class="translate" data-args="MESS_UI4_Low">
              Low
            </span>
          </li>
          <li>
            <input type="checkbox" class="checkReviewFilter" value="2" />
            <span class="translate" data-args="MESS_False">
              False
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}
