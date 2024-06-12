import {useContext, useState} from "react";

import {
    useQuery,
} from '@tanstack/react-query'

import { getUsers} from "../../services/user.js";
import {CurrentUserContext} from "../../utils/UserContext.js";
import UserOption from "./UserOption.jsx";

export default function UserPage() {

    const {
        userContext,
        setUserContext
    } = useContext(CurrentUserContext);

    const  pickUser = function (userId, name) {
        let currentUserData = userContext
        if (currentUserData === null) {
            currentUserData = {}
        }
        currentUserData.userId = userId;
        currentUserData.username = name;
        setUserContext(currentUserData);
    }

    if(userContext === null){
        console.log("No data found");
    }

    const {data} = useQuery({ queryKey: ['users'], queryFn: getUsers })
    console.log(data)
    if(userContext?.userId){
        return (
            <p>Pulled your data from userContext: {userContext?.pref}</p>
        );
    }

    return (
        <>
            <h1> Please Select Your user profile </h1>
            <ul>
                {data?.map(user => <UserOption userId={user.id} userName={user.name} key={user.id} updateUser={pickUser} />)}
            </ul>

        </>
    );
}