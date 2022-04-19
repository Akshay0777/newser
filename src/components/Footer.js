import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="bg-dark text-light text-center text-lg-start">
                    <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                        © 2022 Copyright :&nbsp;
                        <a class="text-light" target="_blank" href="https://www.linkedin.com/in/akshay-pawar-51061019b/"> Akshay Pawar (Developer)</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
