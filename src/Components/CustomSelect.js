import React from 'react';
import Select from 'react-select';

export default class CustomSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    updateSearchOptions(searchOptions){
        this.setState({searchOptions})
    }

    render(){
        return(
            <Select className="mt-2" options={this.state.searchOptions} placeholder="Filter by tags" onChange={this.props.filterSelected} isMulti={true}/>
        )
    }
}
