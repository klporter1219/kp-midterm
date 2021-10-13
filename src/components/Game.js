import React from 'react';
import { Card, Header, Rating, Container, Icon } from 'semantic-ui-react';

import './Game.css';

export default function Game({ name, description, rating }) {
    return (
        <Card>
            <Card.Content>
                <Header as="h4" className="gameHeader">{name}</Header>
                {description}
            </Card.Content>
            <Card.Meta className="gameCardBottom">
                <Rating rating={rating} icon="star" maxRating={5} /> 
                <Icon size="small" circular name="exclamation" className="gameIcon" />
            </Card.Meta>
        </Card>
    )
}