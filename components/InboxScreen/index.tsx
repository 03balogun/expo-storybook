import * as React from 'react';
import { connect } from 'react-redux';
import PureInboxScreen, {PureInboxScreenProp} from '../../components/PureInboxScreen';

const InboxScreen = ({ error }: PureInboxScreenProp) => {
    return <PureInboxScreen error={error} />;
};

export default connect(({ error }) => ({ error }))(InboxScreen);
