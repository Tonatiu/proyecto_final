import React from 'react';
import Utils from '../../controller/common/utils';

class Table extends React.Component {
    constructor(props){
        this.state = {
            headers: Utils.getInstance().isEmpty(props.headers) ? []: props.headers,
            content: Utils.getInstance().isEmpty(props.content) ? []: props.content
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