import React, {useEffect} from "react";
import './App.css';
import {connect} from "react-redux";
import {incrementCounter,  decrementCounter} from "./redux/actions/counterAction";
import {fetchSkillsFromAPI} from "./redux/actions/skillsAction";

function App(props) {
    const {counter, incCounter, decCounter, loading,  data:{skills}, fetchSkills} = props;

    useEffect(() => {
            fetchSkills();
    }, [fetchSkills]);

  return (
    <div className="App">
            <button onClick={incCounter}>increment</button>
            <h1>counter : {counter}</h1>
            <button onClick={decCounter}>decrement</button>
        <hr/>
        <ul>
            {loading ? <h3>loading data...</h3>  : skills.map(item => <li key={item.id}>{item.skills}</li>)}
        </ul>
    </div>
  );
}

function pass_state_to_props_of_this_component(state) {
        return {
            counter : state.counter,
            data : state.skills,
            loading : state.skills.loading
        }
}

function pass_fn_dispatch_to_props_of_this_component(dispatch) {
    return {
        incCounter : () => dispatch(incrementCounter()),
        decCounter : () => dispatch(decrementCounter()),
        fetchSkills : () => dispatch(fetchSkillsFromAPI())
    }
}

export default connect(
    pass_state_to_props_of_this_component,
    pass_fn_dispatch_to_props_of_this_component
)(App);
