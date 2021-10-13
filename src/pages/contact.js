import React, { useState } from 'react';

import { Header, Form, Input, TextArea, Button } from 'semantic-ui-react';

import Menu from '../components/Menu';
import './contact.css';

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [message, setMessage] = useState('');

    const reset = () => {
        setFullName('');
        setContactEmail('');
        setMessage('');
    }

    return (
        <>
            <Menu />
            <Header as="h2">Contact us!</Header>
            <Form onSubmit={reset}>
                <label for="fullName">
                    Full Name:
                </label>
                <Input
                    name="fullName"
                    placeholder="Enter your full name..."
                    value={fullName}
                    onChange={({ target: { value } }) => setFullName(value)}
                />
                <label for="contactEmail">
                    Contact Email:
                </label>
                <Input
                    name="contactEmail"
                    placeholder="Enter the best email to contact you with..."
                    value={contactEmail}
                    onChange={({ target: { value } }) => setContactEmail(value)}
                />
                <label for="message">
                    Message:
                </label>
                <TextArea
                    name="message"
                    placeholder="Enter your message..."
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                />
                <Button color="green" type="submit">
                    Send Message
                </Button>
            </Form>
        </>
    )
}