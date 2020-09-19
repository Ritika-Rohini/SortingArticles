import React from 'react';

function Articles({ articles }) {
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {articles.map((elm) => (
                        < tr data-testid="article" key={elm.date}>
                            <td data-testid="article-title">{elm.title}</td>
                            <td data-testid="article-upvotes">{elm.upvotes}</td>
                            <td data-testid="article-date">{elm.date}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div >
    );

}

export default Articles;
