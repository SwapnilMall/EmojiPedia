import React from "react";
import emojipedia from "../emojipedia"

function CreateEntry(props){
  return (
    <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
  )
}


function Entry(){
  return (
    <dl className="dictionary">
        {emojipedia.map(CreateEntry)}
    </dl>
  )
}

export default Entry;