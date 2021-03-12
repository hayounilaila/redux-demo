import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchSkillsFromAPI} from "./redux/actions/skillsAction";


export default function AppHooks() {
    const {skills, loading} = useSelector(state => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSkillsFromAPI())
    }, [])

    return (
        <>
            <h1>redux hooks</h1>
            <ul>
                {loading ? <h3>loading data...</h3> : skills.map(item => <li key={item.id}>{item.skills}</li>)}
            </ul>
        </>

    );
}
