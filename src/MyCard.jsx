/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import Boton from './Boton';
const MyCard = ({ image, title, text, colorButton, textButton}) => {
    return (
        <>
            <Card style={{ width: "18rem", margin: "20px" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Boton colorButton={colorButton} textButton={textButton} />
                </Card.Body>
            </Card>
        </>
    );
};
export default MyCard;