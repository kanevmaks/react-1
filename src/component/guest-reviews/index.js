import "./index.css"
import Heading from "../heading"
import Box from "../box"
import { Fragment } from "react"

export default function ReviewList ({list}){
    return <div className="review__block">
        <Heading>Відгуки клієнтів</Heading>
        
        <div className="review__list">
            {list.map(({id, ...rest})=>(
                <Fragment key={id}>
                    <Item {...rest}/>
                </Fragment>
            ))}
        </div>
    </div>
}

function Item({guestName, rating, review}){
    return (
        <Box className="review">
            <div className="review__header">
            <span className="review__title">{guestName}</span>
            <span className="review__rating">Рейтинг: {rating}</span>    
            </div>
            <p className="review__text">{review}</p>
        </Box>
    )
}