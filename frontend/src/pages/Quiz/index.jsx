import {useContext, useState} from "react";

import {
    useQuery,
} from '@tanstack/react-query'

import { getSubjects} from "../../services/subjects.js";
import BookShopCard from "../../components/BookCard.jsx";
import {CurrentUserContext} from "../../utils/UserContext.js";

export default function Quiz() {

    const {
        userContext,
        setUserContext
    } = useContext(CurrentUserContext);

    const  setGenreOption = function (choiceName) {

        setUserContext({ pref : choiceName});
    }

    const {data} = useQuery({ queryKey: ['subjects'], queryFn: getSubjects })

    if(userContext?.pref){
        return (
            <p>Pulled your data from userContext: {userContext?.pref}</p>
        );
    }

    if (!userContext) {
        return (
            <>
                <h1> Our Fun quiz </h1>
                {data?.map(subj => <BookShopCard desc={subj.desc} name={subj.name} key={subj.id} setGenreOption={setGenreOption} />)}
            </>
        );
    }
}