import React from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";

class BookInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BooksData: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books`)
      .then((BooksData) => {
        this.setState({ BooksData: Response.data });
      })
      .catch((error) => alert(error.message));
  };
  render() {
    return (
      this.state.booksData.length > 0 && (
        <>
          {this.state.booksData.map((book) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      <p>{book.description}</p>
                      <p>{book.status}</p>
                      <p>{book.email}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </>
      )
    );
  }
}

export default BookInfo;
