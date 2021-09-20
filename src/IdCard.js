import React from 'react'

function IdCard(props) {
    return (
        <div className="idCard">
            <img id="idCardImage" src={props.picture} alt="personpic"/>
            <div id="idCardData">
                <span> Firt Name: {props.firstName} </span>
                <span> Last Name: {props.lastName} </span>
                <span> Gender: {props.gender} </span>
                <span> Height: {props.height} </span>
                <span> Birth: {props.birth.toLocaleDateString()} </span>
            </div>
        </div>
    )
}

export default IdCard
