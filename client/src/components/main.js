import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import {ApolloProvider} from "react-apollo";
import {Query} from "react-apollo";

class Main extends Component {

    componentDidMount() {

    }


    deleteItem = (el) => {
        console.log(el);
       
    }

    sendRequest = () => {
        return (
            <Query query={gql`{ allProducts{ title, qty } }`}>
                {({loading, error, data}) => {
                    console.log(data);
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    return data.allProducts.map((el, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <span aria-hidden="true" onClick={this.deleteItem.bind(this, el)}>&times;</span>
                                <div className="card-header">
                                    <span>Titre{el.title}</span>
                                </div>
                                <br/>
                                <span>Quantité : {el.qty}</span>
                            </div>
                        </div>
                    ));

                }}
            </Query>
        )
    }

    render() {
        const client = new ApolloClient({
            uri: "http://127.0.0.1:9000/graphql"
        });
        return (
            <div>
                <ApolloProvider client={client}>
                    <div className="container">
                        <h2>My first Apollo app 🚀</h2>
                        <div className="row justify-content-center mt-5">
                            {this.sendRequest()}
                        </div>
                    </div>
                </ApolloProvider>
            </div>
        );
    }
}


export default Main;
