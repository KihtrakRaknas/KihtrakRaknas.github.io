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
        //this.masonry.current.updateFilter()
        this.state = {
            reverseSort:false,
            showMobileBtns:false,
        }
        this.tags = []
      }

      sortBtns = ()=>{
            return(
                <div className="btn-group mt-2" role="group">
                    <input type="radio" class="btn-check" name="options" id="option1" autoComplete="off" defaultChecked/>
                    <label className="btn btn-outline-info" for="option1" onClick={()=>{this.masonry.current.setSort("original-order",this.state.reverseSort)}}>
                        Default
                    </label>

                    <input type="radio" class="btn-check" name="options" id="option2" autoComplete="off"/>
                    <label className="btn btn-outline-info" for="option2" onClick={()=>{this.masonry.current.setSort("start",this.state.reverseSort)}}>
                        Date Created
                    </label>

                    <input type="radio" class="btn-check" name="options" id="option3" autoComplete="off"/>
                    <label className="btn btn-outline-info" for="option3" onClick={()=>{this.masonry.current.setSort("end",this.state.reverseSort)}}>
                        Date Finished
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
                <div className="d-md-none text-center">
                    <button type="button" className="btn btn-outline-info" style={{display:this.state.showMobileBtns?"none":"inline-block"}} onClick={()=>this.setState({showMobileBtns:true})}>Sort/Filter</button>
                </div>
                <div className={`d-${this.state.showMobileBtns?"block":"none"} d-md-block`}>
                    <div className="d-flex flex-column flex-md-row">
                        {this.sortBtns()}
                        <div className='mx-3 d-none d-md-block'></div>
                        <div className="flex-grow-1">
                            {<CustomSelect ref={this.customSelect} filterSelected={this.filterSelected.bind(this)}/>}
                        </div>
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