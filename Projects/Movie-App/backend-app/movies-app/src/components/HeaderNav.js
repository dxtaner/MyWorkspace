import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { fixedMenuStyle, menuStyle } from "../helpers/styleHelper";
import { Container, Visibility, Menu, Image, Icon } from "semantic-ui-react";

class HeaderNav extends Component {
  state = {
    menuFixed: null,
  };

  stickTopMenu = () => this.setState({ menuFixed: true });
  unStickTopMenu = () => this.setState({ menuFixed: null });

  render() {
    const { menuFixed } = this.state;

    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}>
          <Menu
            borderless
            fixed={menuFixed && "top"}
            style={menuFixed ? fixedMenuStyle : menuStyle}>
            <Container text stackable="true">
              <Menu.Item as={Link} to="/" exact="true">
                <Image
                  size="mini"
                  src="https://react.semantic-ui.com/logo.png"
                />
                <Menu.Item header>Movieapp</Menu.Item>
              </Menu.Item>

              <Menu.Item as={NavLink} to="/about" exact>
                <Icon name="info" /> About
              </Menu.Item>
              <Menu.Item as={NavLink} to="/movies" exact>
                <Icon name="film" /> Movies
              </Menu.Item>
              <Menu.Item as={NavLink} to="/movies/new" exact>
                <Icon name="plus" /> Add New
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}

export default HeaderNav;
