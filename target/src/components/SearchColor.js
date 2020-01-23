import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
class SearchColor extends Component {
    state = { lipcolor: null };

    handleChangeComplete = (color, event) => {
        this.setState({ lipcolor: color.hex });
        this.search();
        console.log(color.hex)
    }
    search = () => { 

        this.props.search(this.state.lipcolor);
    }
    render() {
        return (
            <div>
                
                <h3>Lipsticks</h3>
                <p>Scroll and select a hue</p>
                <SwatchesPicker
                    
                    lipcolor={this.state.background}
                    onChangeComplete={this.handleChangeComplete} />
            
            </div>
        )
    }
}
export default SearchColor


