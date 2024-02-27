import React from 'react';

const Student = (props) => {
    console.log(props);
    return (
        <React.Fragment>
        <h2>The name of the student is {props.name}</h2>
        <h2>The name of the student is {props.email_id}</h2>
        </React.Fragment>
    );
}
 
export default Student;