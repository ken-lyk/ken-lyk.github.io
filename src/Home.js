import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
                <main>
                    <h2>Welcome to the homepage!</h2>
                    <p>You can do this, I believe in you.</p>
                </main>
                <nav>
                    <a href="/about">About</a>
                </nav>
            </>
        )
    }
}
