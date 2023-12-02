import PropTypes from "prop-types";
import React from "react";

const EdycjaDanych = (props) => {
    const handleInputChange = (e) => {
        props.onInputChange({ [e.target.name]: e.target.value });
    };

    return (
        <div className="EdycjaDanych">
            <div className="EdycjaDanych-input">
                <label htmlFor="TextPesel">Podaj pesel</label>
                <input
                    type="text"
                    id="pesel"
                    name="pesel"
                    pattern="\d{11}"
                    onChange={handleInputChange}
                />
            </div>

            <div className="EdycjaDanych-input">
                <label htmlFor="TextName">Podaj imię</label>
                <input
                    type="text"
                    id="imie"
                    name="imie"
                    onChange={handleInputChange}
                />
            </div>

            <div className="EdycjaDanych-input">
                <label htmlFor="TextLastname">Podaj nazwisko</label>
                <input
                    type="text"
                    id="nazwisko"
                    name="nazwisko"
                    onChange={handleInputChange}
                />
            </div>

            <div className="EdycjaDanych-input">
                <label htmlFor="TextAdres">Podaj adres</label>
                <input
                    type="text"
                    id="adres"
                    name="adres"
                    onChange={handleInputChange}
                />
            </div>

            <div className="EdycjaDanych-input">
                <label htmlFor="TextTNum">Podaj numer telefonu</label>
                <input
                    type="text"
                    id="num_tel"
                    name="num_tel"
                    pattern="\d{9,15}"
                    onChange={handleInputChange}
                />
            </div>

            <div className="EdycjaDanych-input">
                <label htmlFor="TextEmail">Podaj email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                />
            </div>

            <div className="EdycjaDanych-input">
                <label htmlFor="TextPlec">Podaj płeć</label>
                <select
                    id="plec"
                    name="plec"
                    onChange={handleInputChange}
                    className="select">
                    <option value="male">Mężczyzna</option>
                    <option value="female">Kobieta</option>
                    <option value="other">Inne</option>
                </select>
            </div>
            <button onClick={props.onSave}>Wyslij</button>
        </div>
    );
};

EdycjaDanych.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

EdycjaDanych.defaultProps = {
    onInputChange: () => {},
    onSave: () => {},
};

export default EdycjaDanych;
