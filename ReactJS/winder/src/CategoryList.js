import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const customStyle = {
  listGroup: {
    borderRadius: "5px",
    marginBottom: "10px",
  },
  listGroupItem: {
    background: "linear-gradient(to right, #ff3366, #33ccff)",
    color: "black",
    cursor: "pointer",
    border: "2px solid purple",
    fontWeight: "800",
    transition: "background-color 0.2s",
    padding: "15px",
  },
  listGroupItemActive: {
    background: "white",
    color: "gold",
  },
};

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    const { categories } = this.state;
    const { title, currentCategory, changeCategory } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <ListGroup style={customStyle.listGroup}>
          {categories.map((category) => (
            <ListGroupItem
              key={category.id}
              onClick={() => changeCategory(category)}
              active={category.categoryName === currentCategory}
              style={{
                ...customStyle.listGroupItem,
                ...(category.categoryName === currentCategory
                  ? customStyle.listGroupItemActive
                  : null),
              }}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
