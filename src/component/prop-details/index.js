import "./index.css"
import Heading from "../heading"
import Box from "../box"
import ListItem from "../list-item"

import guestsImg from "./guests.svg";
import bedroomsImg from "./bedrooms.svg";
import bedsImg from "./beds.svg";
import bathsImg from "./baths.svg";

export default function PropDetails ({guests, bedrooms, beds, baths}){
    return <Box shadow>
        <Heading border>Деталі властивості</Heading>
        <ul className="prop-list">
            <ListItem imageSrc={guestsImg}>{guests} гості</ListItem>
            <ListItem imageSrc={bedroomsImg}>{bedrooms} спальня</ListItem>
            <ListItem imageSrc={bedsImg}>{beds} ліжко</ListItem>
            <ListItem imageSrc={bathsImg}>{baths} ванна кімната</ListItem>
        </ul>
    </Box>
}