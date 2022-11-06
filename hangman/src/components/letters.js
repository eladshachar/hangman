import React, {Component} from 'react';
import { Letter } from './letter';

export class Letters extends Component {

    constructor(){
        super()
    }

   render() {
    return (
        <div>
            <div>Available Letters</div>
            <Letter />
        </div>    
    )
   } 
}