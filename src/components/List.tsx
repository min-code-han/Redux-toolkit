import React from 'react';
import {useAppSelector} from "../store/store";

const List = () => {
    const persons = useAppSelector(state => state.person.persons)
    console.log("persons", persons)
    return(
        <div>
            <p>This is List Components</p>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                </tr>
                </thead>
                <tbody>
                {persons.map(person => (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;
