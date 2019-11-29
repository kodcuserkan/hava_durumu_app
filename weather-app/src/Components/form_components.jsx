import React from 'react'
import "./style.css"
function form_components(props) {
    return (
        <div className="container">
        <div>{props.error?spaceError():null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="Şehir" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Ülke" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Getir</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
function spaceError (){
   
    return (

        <div className="alert alert-danger mx-5" role="alert">
        Lütfen önce şehir ve ülke alanlarını doldurunuz...
        </div>
    )
}
export default form_components;