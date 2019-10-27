import React from 'react';
import {isEmpty} from '../../controller/common/utils';

class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            headers: isEmpty(props.headers) ? []: props.headers,
            content: isEmpty(props.content) ? []: props.content
        };
    }

    render(){
        return(
            <table className='table'>
                <thead>
                    <tr>
                        {this.state.headers.map(header => <th>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.state.content.map(row => 
                    <tr>
                        {Object.values(row).map(columnValue => <td>{columnValue}</td>)}
                    </tr>)}
                </tbody>
            </table>
        );
    }
};

export default Table;