import React from 'react';
import 'semantic-ui-css/semantic.min.css'


import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';

export default function MidtermMenu() {
    return (
        <Menu>
            <Menu.Item as={Link} to="/">
                <Icon name="home" />
            </Menu.Item>
            <Menu.Item as={Link} to="/games">
                <Icon name="game" />
            </Menu.Item>
            <Menu.Item as={Link} to="/contact">
                <Icon name="users" />
            </Menu.Item>
        </Menu>
    );
}