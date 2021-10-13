import React from 'react';
import 'semantic-ui-css/semantic.min.css'


import { Menu, Icon } from 'semantic-ui-react';

export default function MidtermMenu() {
    return (
        <Menu>
            <Menu.Item as="a" href="/">
                <Icon name="home" />
            </Menu.Item>
            <Menu.Item as="a" href="/games" >
                <Icon name="game" />
            </Menu.Item>
            <Menu.Item as="a" href="/contact">
                <Icon name="users" />
            </Menu.Item>
        </Menu>
    );
}