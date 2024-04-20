/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';

const Boton = ({ colorButton, textButton }) => {
    return (
        <>
            <Button style={{ width: "180px", marginTop: "30px"}} variant={colorButton}>{textButton}</Button>
        </>
    );
};

export default Boton;
