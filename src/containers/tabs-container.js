import { connect } from 'react-redux';
import NavTabs from '../components/nav-tabs';
import { selectTab } from '../actions/nav-actions';

const mapStateToProps = (state) => ({
  tabs: state.tabsReducer
});

export default connect( mapStateToProps, {selectTab} )(NavTabs);