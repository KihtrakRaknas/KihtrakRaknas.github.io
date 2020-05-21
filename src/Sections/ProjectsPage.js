import React from 'react';
import './Projects.css';
import MasonryCardDisplay from '../Components/MasonryCardDisplay';
import {Projects} from '../Projects';
import CustomSelect from '../Components/CustomSelect';

export default class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.masonry = React.createRef();
        this.customSelect = React.createRef();
        this.customSelectMobile = React.createRef();
        //this.masonry.current.updateFilter()
        this.state = {
            reverseSort:false,
            showMobileBtns:false,
        }
        this.tags = []
      }

      sortBtns = ()=>{
            return(                        
            <div className="btn-group btn-group-toggle mt-2" data-toggle="buttons">
                <label className="btn btn-secondary active" onClick={()=>{this.masonry.current.setSort("original-order",this.state.reverseSort)}}>
                    <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked/> Default
                </label>
                <label className="btn btn-secondary" onClick={()=>{this.masonry.current.setSort("start",this.state.reverseSort)}}>
                    <input type="radio" name="options" id="option2" autoComplete="off"/> Date Created
                </label>
                <label className="btn btn-secondary" onClick={()=>{this.masonry.current.setSort("end",this.state.reverseSort)}}>
                    <input type="radio" name="options" id="option3" autoComplete="off"/> Date Finished
                </label>
            </div>
            )
      }

      filterSelected = (selctions) => {
        if(selctions)
            this.masonry.current.updateFilter(JSON.parse(JSON.stringify(selctions)).map((item)=>{return item.label}))
        else   
            this.masonry.current.updateFilter([]);
      }

    updateTags = (tags) =>{
        let newTags = []
        console.log(tags)
        if(tags)
            for(let tag of tags)
                if(tag&&this.tags.indexOf(tag) === -1)
                    newTags.push(tag)
        console.log("new"+newTags)
        if(newTags.length>0){
            this.tags = this.tags.concat(newTags)
            console.log("projectPage - added tags")
            let searchOptions = [];
            for(let tag of this.tags)
                searchOptions.push({value:tag,label:tag});
            this.customSelect.current.updateSearchOptions(searchOptions)
            this.customSelectMobile.current.updateSearchOptions(searchOptions)
            console.log("------------------------------------")
            console.log(searchOptions)
        }
console.log(this.tags)
    }

    render(){
        return (
            <div>
                <h1 className="text-center display-2">Projects</h1>
                <br/>
                <div className="d-none d-md-block">
                    <div className="form-row">
                        <div className="col-6">
                            {this.sortBtns()}
                        </div>
                        <div className="col-6">
                            {<CustomSelect ref={this.customSelect} filterSelected={this.filterSelected.bind(this)}/>}
                        </div>
                    </div>
                </div>
                <div className="d-md-none text-center">
                    <button type="button" className="btn btn-outline-info" style={{display:this.state.showMobileBtns?"none":"inline-block"}} onClick={()=>this.setState({showMobileBtns:true})}>Sort/Filter</button>
                    <div style={{display:this.state.showMobileBtns?"block":"none"}}>
                        {this.sortBtns()}
                        {<CustomSelect ref={this.customSelectMobile} filterSelected={this.filterSelected.bind(this)}/>}   
                    </div>
                </div>
                <br/>
                <MasonryCardDisplay ref={this.masonry} updateTags={this.updateTags.bind(this)}>
                    {Projects}
                </MasonryCardDisplay>
            </div>
        )
    }
}