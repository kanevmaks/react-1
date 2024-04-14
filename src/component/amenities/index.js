import "./index.css"
import Heading from "../heading"
import Box from "../box"
import ListItem from "../list-item"

import poolImg from "./pool.svg";
import gymImg from "./gym.svg";
import breackfastImg from "./breakfast.svg";
import wifiImg from "./wifi.svg";
import parkingImg from "./parking.svg";
import petsImg from "./pets.svg";
import airportShuttleImg from "./airportShuttle.svg";
import conciergeServiceImg from "./conciergeService.svg";
import roomServiceImg from "./roomService.svg";
import childFrendlyImg from "./childFrendly.svg";

export default function Amenities (hasPool, hasGym, hasFreeBreakfast, hasFreeWiFi, hasParking, hasPetsAllowed, hasAirportShuttle, hasConciergeService, hasRoomService, hasChildFriendly){
    return <Box shadow>
        <Heading border>Зручності</Heading>
        <ul className="amenities-list">
            {hasPool && <ListItem imageSrc={poolImg}>Басейн</ListItem>}
            {hasGym && <ListItem imageSrc={gymImg}>Спортивний зал</ListItem>}
            {hasFreeBreakfast && <ListItem imageSrc={breackfastImg}>Безкоштовний сніданок</ListItem>}
            {hasFreeWiFi && <ListItem imageSrc={wifiImg}>Безкоштовний Wi-Fi</ListItem>}
            {hasParking && <ListItem imageSrc={parkingImg}>Безкоштовний вуличний паркінг</ListItem>}
            {hasPetsAllowed && <ListItem imageSrc={petsImg}>Дозволено розміщення з домашніми тваринами</ListItem>}
            {hasAirportShuttle && <ListItem imageSrc={airportShuttleImg}>Трансфер до/з аеропорту</ListItem>}
            {hasConciergeService && <ListItem imageSrc={conciergeServiceImg}>Консьєрж-сервіс</ListItem>}
            {hasRoomService && <ListItem imageSrc={roomServiceImg}>Обслуговування номерів</ListItem>}
            {hasChildFriendly && <ListItem imageSrc={childFrendlyImg}>Підходить для дітей</ListItem>}
        </ul>
    </Box>
}