import * as React from 'react';
import {Provider} from "react-redux";
import {action} from "@storybook/addon-actions";
import { storiesOf } from '@storybook/react-native';
import InboxScreen from './index';

const store = {
    getState: () => {
        return {
            error: "Something",
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

storiesOf('InboxScreen', module)
    .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
    .add('default', () => <InboxScreen />)
