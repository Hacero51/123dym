import React, { Component } from 'react';
import Tabs from './Tabs';
import Whatsapp from '../components/Whatsapp';

export default class Asociados extends Component {
    render() {
        return (
            <div>
                <Tabs />
                <Whatsapp />
            </div>
        )
    }
}
