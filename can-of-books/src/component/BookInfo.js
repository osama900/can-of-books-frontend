import React from "react";


import Card from "react-bootstrap/Card";

class BookInfo extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      this.props.BooksData.length > 0 && (
        <>
          {this.props.BooksData.map((book, idx) => {
            return (
              <div key={idx}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body key={idx}>
                    <Card.Title>{book.title}</Card.Title>

                    <p>{book.description}</p>
                    <p>{book.status}</p>
                    <p>{book.email}</p>

                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </>
      )
    );
  }
}

export default BookInfo;
