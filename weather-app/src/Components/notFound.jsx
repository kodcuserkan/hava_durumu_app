import React from 'react'

function notFound(props) {
    return (
        <div>
        {props.notFoundErr?NFError():null}
        </div>
    )
}
function NFError () {
    return (
        <div className="alert alert-danger mx-5" role="alert">
        Aradığınız şehir yada ülke bulunamadı...
        </div>
    )
}
export default notFound;