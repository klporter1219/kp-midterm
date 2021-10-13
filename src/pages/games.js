import React from 'react';

import { Header, Grid } from 'semantic-ui-react';

import Menu from '../components/Menu';
import Game from '../components/Game';

export default function Games() {
   return (
    <>
        <Menu />
        <Header as="h2">Games</Header>
        <Grid columns={3}>
            <Grid.Column>
                <Game name="Tic-Tac-Toe" description="3 in a row" rating={2} />
            </Grid.Column>
            <Grid.Column>
                <Game name="Checkers" description="Jumping race" rating={3} />
            </Grid.Column>
            <Grid.Column>
                <Game name="Snakes & Ladders" description="Snake!" rating={4} />
            </Grid.Column>
            <Grid.Column>
                <Game name="Yahtzee" description="Feeling lucky?" rating={5} />
            </Grid.Column>
        </Grid>
    </>
   )
}