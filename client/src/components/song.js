import React, { Component } from 'react';
import $ from 'jquery';

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album_art: '',
            artist: props.artist,
            title: props.title
        }

    }

    componentDidMount() {
        console.log("get request being made");
        $.get("/get-song/" + this.state.title).then(res => {
            console.log(res);
        })
        // $.get("/get-song", function(){
        //     console.log("get request for song made");
        // })
    }

    render() {
        return (
            <div className="song">
                <p>{this.state.title}</p>
                <p>{this.state.artist}</p>
            </div>
        )
    }
}

export default Song;