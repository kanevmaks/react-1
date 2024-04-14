import "./index.css"
import Heading from "../heading"
import Box from "../box"
import ListItem from "../list-item"


export default function AttractionsList ({list}){
    return (
        <Box shadow>
            <Heading border>Пам'ятки поблизу</Heading>
            <ul className="attractions-list">
                {list.map(({id, name, link})=>(
                    <ListItem key={id}><a className="item__link" href={link}>{name}</a> </ListItem>
                ))}
            </ul>
        </Box>
    )
}