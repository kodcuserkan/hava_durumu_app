import React from 'react'
import "./style.css"

function weather_components(props) {
    const min = props.min_temp;
    const max = props.max_temp;
    const desc = props.description;

    return (
        <div className="container text-light">
            <div className="cards pt-4">
                <div><font size="6">{props.city}  {props.country}</font></div>

                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                {props.celsius ? (<h1 className="py-2">{props.celsius}&deg;</h1>) : null}
                {minmaxTemp(min, max)}
                <h4 className="py-3">{tx(desc)}</h4>
            </div>
        </div>
    )
}

function tx(desc) {
    let translated = "";
    // console.log(typeof desc);

    switch (desc) {
        case "clear sky":
            translated = "Açık gökyüzü"
            break;
        case "few clouds":
            translated = "Az bulutlu"
            break;
        case "scattered clouds":
            translated = "Kapalı gökyüzü"
            break;
        case "broken clouds":
            translated = "Parçalı bulutlu"
            break;
        case "shower rain":
            translated = "Sağanak yağmurlu"
            break;
        case "rain":
            translated = "Yağmurlu"
            break;
        case "light intensity shower rain":
            translated = "Çiselti/Hafif yağmurlu"
            break;
        case "snow":
            translated = "Karlı"
            break;
        case "thunderstorm with light rain":
            translated = "Gökgürültülü hafif yağmurlu"
            break;
        case "thunderstorm":
            translated = "Gök gürültülü sağanak yağmurlu"
            break;
        case "mist":
            translated = "Sisli"
            break;
        case "heavy intensity drizzle":
            translated = "Gök gürültülü şiddetli yağış"
            break;

        default:
            translated = desc
            break;
    }


    return translated;
}

function minmaxTemp(min, max) {

    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }


}

export default weather_components;