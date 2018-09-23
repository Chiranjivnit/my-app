import React from "react";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getPost();
        this.user();

    }

    getPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {

                this.setState({
                    data: json
                })
            })
        console.log(this.state.data)
    }

    user = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(JSON.stringify(json)))

    }
    render() {
        return (
            <div>
                {
                    this.state.data.map(post => (
                        <p key={post.id}>{post.title}</p>
                        
                        ))
                }
            </div>

        );
    }
}

export default Home;