import "./index.css"

import Heading from "../heading"

export default function ContactInfo ({name, image, response_rate, response_time, info, phone}){
    return (
        <div className="contact__block">
           <div className="contact__header">
                <div className="image">
                    <img src={image} alt={name} className="avatar" />
                </div>
                <div className="info__block">
                    <Heading>Господар - {name}</Heading>

                    <div className="info__sub-block">
                        <span className="info__sub-value">{phone}</span>
                        <span className="info__sub-value">{response_time}</span>
                        <span className="info__sub-value">{response_rate}% швидкості відгуків</span>
                    </div>
                </div>
           </div>
           <div className="description">{info}</div>
        </div>
    )
}