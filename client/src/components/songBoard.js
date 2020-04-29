import React, { Component } from 'react';
import Song from './song';

class SongBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
        
    }

    componentDidMount(){
     
    }

    render() {
        return (
            <div className="songBoard">
                <Song title="Master Yupa" artist="Mac Demarco" />
            </div>
        )
    }
}

export default SongBoard;