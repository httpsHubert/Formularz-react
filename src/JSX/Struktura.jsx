import React from "react";
import PropTypes from "prop-types";
import "../index.css";

const Strukt = (props) => {
    return (
        <div className="Wypisz">
            <table>
                <tr>
                    <td>id: {props.id}</td>
                    <td>Pesel: {props.pesel}</td>
                    <td>Imię: {props.imie}</td>
                    <td>Nazwisko: {props.nazwisko}</td>
                    <td>Adres: {props.adres}</td>
                    <td>Numer telefonu: {props.num_tel}</td>
                    <td>Email: {props.email}</td>
                    <td>Pleć: {props.plec}</td>
                </tr>
            </table>
        </div>
    );
};

Strukt.propTypes = {
    id: PropTypes.number,
    pesel: PropTypes.number,
    imie: PropTypes.string,
    nazwisko: PropTypes.string,
    adres: PropTypes.string,
    num_tel: PropTypes.number,
    email: PropTypes.string,
    plec: PropTypes.string,
};

export default Strukt;
