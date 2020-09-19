import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles"

function App({ articles }) {
    //initializing the state
    let [articlesProps, updateArticles] = useState([...articles])
    const onClickSortedUpvotes = (articlesInput) => {
        articlesInput.sort(function (a, b) {
            return b.upvotes - a.upvotes
        })
        updateArticles([...articlesInput])
    }

    const onClickSortedDated = (articlesInput) => { //passed the props as an arguments
        articlesInput.sort(function (a, b) {
            let c = new Date(a.date)
            let d = new Date(b.date)
            return d - c
        })
        updateArticles([...articlesInput]) //updated state
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => onClickSortedUpvotes(articlesProps)}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => onClickSortedDated(articlesProps)}>Most Recent</button>
            </div>
            <Articles articles={articlesProps} />
        </div>
    );

}

export default App;
