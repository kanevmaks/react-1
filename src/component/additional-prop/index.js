import "./index.css"
import Heading from "../heading"
import Box from "../box"
import ListItem from "../list-item"

export default function AdditionalProp ({houseRules, cancellationPolicy, localTransportation, hostLanguages, specialOffers, checkInInstructions}){
    return <Box shadow>
        <Heading border>Додаткові властивості</Heading>
        <ul className="prop-list">
            <ListItem title="Правила дому">{houseRules}</ListItem>
            <ListItem title="Політика скасування">{cancellationPolicy}</ListItem>
            <ListItem title="Місцевий транспорт">{localTransportation}</ListItem>
            <ListItem title="Мови хоста">{hostLanguages}</ListItem>
            <ListItem title="Спеціальні пропозиції:">{specialOffers}</ListItem>
            <ListItem title="Інструкції щодо реєстрації">{checkInInstructions}</ListItem>
        </ul>
    </Box>
}