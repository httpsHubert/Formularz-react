import React from "react";
import Strukt from "./Struktura";
import EdycjaDanych from "./Dane";
import "../index.css";

export default class Wypisanie extends React.Component {
    state = {
        Dane: [],
        edytowaneDane: {
            id: "",
            pesel: "",
            imie: "",
            nazwisko: "",
            adres: "",
            num_tel: "",
            email: "",
            plec: "Mężczyzna",
        },
    };

    dodanieDanych = (val) => {
        this.setState((prevState) => ({
            edytowaneDane: { ...prevState.edytowaneDane, ...val },
        }));
    };

    zapisDanych = () => {
        const INITIAL_STATE = {
            id: "",
            pesel: "",
            imie: "",
            nazwisko: "",
            adres: "",
            num_tel: "",
            email: "",
            plec: "Mężczyzna",
        };

        this.setState((prevState) => ({
            Dane: [...prevState.Dane, prevState.edytowaneDane],
            edytowaneDane: INITIAL_STATE,
        }));
    };

    render() {
        const dane = this.state.Dane.map((element, index) => {
            return (
                <Strukt
                    key={element.id}
                    id={(element.id = index + 1)}
                    pesel={element.pesel}
                    imie={element.imie}
                    nazwisko={element.nazwisko}
                    adres={element.adres}
                    num_tel={element.num_tel}
                    email={element.email}
                    plec={element.plec}></Strukt>
            );
        });
        return (
            <>
                <h1 className="h1">Dane Osobowe</h1>
                <EdycjaDanych
                    onInputChange={(val) => this.dodanieDanych(val)}
                    onSave={() => this.zapisDanych()}></EdycjaDanych>
                {dane}
            </>
        );
    }
}
