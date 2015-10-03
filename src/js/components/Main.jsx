import React from 'react';

class Main extends React.Component {
    render () {
        return (
            <h1>HEADER YO</h1>
            {this.props.children}
        )
    }
}

module.exports = Main;
