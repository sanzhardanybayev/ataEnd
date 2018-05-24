import React from 'react';
import styles from './styles.scss';
import SlikBox from "../../SlikBox/SlikBox";
import ModuleButton from "../../ModuleBatton/ModuleButton";

export default class SanatoriumPanel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={['container', styles.SanatoriunPanel].join(' ')}>
                <div className={'row'}>
                    <div className={'contaier'}>
                        <div className={'row'}>
                            <h4 className={'col-12'}>{this.props.title}</h4>
                            <h4 className={'col-12'}>{this.props.name}</h4>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
