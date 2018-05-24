import React from 'react';
import StarsWithBorder from "../Stars/StarsWithBorder";

export default class Assessments extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return[<div className={'col-12'}>
                 <p className={'col-12 px-0'}>Оценки покупателей</p>
                 <div className={'container px-0'}>
                     <div className={'row offset-0 ml-0'}>
                         <StarsWithBorder/>
                     </div>
                 </div>
           </div>];
    }
}
