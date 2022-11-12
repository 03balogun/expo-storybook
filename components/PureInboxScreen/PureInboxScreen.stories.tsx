import * as React from 'react';
import {Provider} from "react-redux";
import {action} from "@storybook/addon-actions";
import { storiesOf } from '@storybook/react-native';
import PureInboxScreen from './index';
import {defaultTasks} from "../PureTaskList/PureTaskList.stories";

const store = {
    getState: () => {
        return {
            tasks: defaultTasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

storiesOf('InboxScreen', module)
    .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
    .add('default', () => <PureInboxScreen />)
    .add('error', () => <PureInboxScreen error="Something" />);
