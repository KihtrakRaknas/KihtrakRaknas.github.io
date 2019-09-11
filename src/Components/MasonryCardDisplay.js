import React from 'react';
import ReactDOM from 'react-dom';
import Isotope from 'isotope-layout';
import ProjectCard from './ProjectCard';

var globalKeys = [];
var globalSortKey = [];
var globalSortAscending = false;

// Container for isotope grid
export default class MasonryCardDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isotope: null, width:null};
    }

    render() {
        return(
            <div className="item-grid" style={{overflowY: "hidden"}}>
                {this.props.children.map((childa)=>{
                    var {...other} = childa.props
                    return(
                        <ProjectCard
                            {...other}
                            update = {this.componentDidUpdate.bind(this)}
                            width = {this.state.width}
                            key= {childa.props.title}
                        />
                    )
                })}
            </div>
        )
    }
    updateDimensions = () =>{
        const node = ReactDOM.findDOMNode(this);
        this.setState({width:node.offsetWidth})
    }
    // set up isotope
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        if(!this.state.width)
            this.updateDimensions()
        window.addEventListener("resize", this.updateDimensions);
        console.log(node)
        if (!this.state.isotope) {
            this.setState({
                isotope: new Isotope( node, {
                    itemSelector: '.card',
                    masonry: {
                        horizontalOrder: true,
                        gutter: 20
                    },
                    percentPosition: true,
                    getSortData: {
                        start: function(itemElem) {
                            if(itemElem.getElementsByClassName('time').length>0&&Number(itemElem.getElementsByClassName('time')[0].dataset.start))
                                return Number(itemElem.getElementsByClassName('time')[0].dataset.start)
                            return null;
                        },
                        end: function(itemElem) {
                            if(itemElem.getElementsByClassName('time').length>0&&Number(itemElem.getElementsByClassName('time')[0].dataset.end))
                                return Number(itemElem.getElementsByClassName('time')[0].dataset.end)
                            return Infinity;
                        },
                    },
                  })
            });
        } else {
            this.state.isotope.reloadItems();
        }
    }

    setSort = (key, switchSort) =>{
        globalSortKey = [key,'original-order'];
        globalSortAscending = switchSort;
        console.log(this.state.isotope)
        this.state.isotope.arrange({ 
            sortBy: globalSortKey,
            sortAscending: {
                start: globalSortAscending?true:false,
                end:globalSortAscending?true:false,
                "original-order":true
            }
                
        })
    }

    updateFilter = (keys) =>{
        globalKeys = keys;
        this.state.isotope.arrange({ filter: function(){
            console.log(this)//Returns element
            //console.log(this.keys)//Doesn't work
            console.log(globalKeys)//Doesn't work
            if(globalKeys)
                for(let key of globalKeys)
                    if(!JSON.parse(this.dataset.filter).includes(key))
                        return false
            return true
        }
        })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    // update isotope layout
    componentDidUpdate() {
        if (this.state.isotope) {
            this.state.isotope.reloadItems();
            this.state.isotope.layout();
        }
    }
}