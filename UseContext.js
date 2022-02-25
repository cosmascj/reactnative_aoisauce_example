import React from "react";
import { useContext, createContext , useState} from "react";

const UserContext = createContext()
const component1 = () => {
    const [name, setName] = useState("obi")

    return (
        <UserContext.Provider value={name}>


        </UserContext.Provider>
    )
}

const component2 = () => { };

const component3 = () => { };

const component4 = () => {
const name = useContext(UserContext)

};