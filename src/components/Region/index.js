import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
// import check from 'check-types'
import Select from '../Base/Select'
import RemoteDataProvider from '../Base/RemoteDataProvider'
import {REGIONS_URL} from '../../constants'

class Region extends PureComponent {

    optionListUpdater = RemoteDataProvider(REGIONS_URL, 'regions')
    render() {
        return <Select {...this.props} isAsync remoteDataFetch={this.optionListUpdater} />
    }
}

Region.propTypes = {
    controlId: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    defaultSelected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.func)
    ]),
    filter: PropTypes.arrayOf(PropTypes.shape({
        accessor: PropTypes.string,
        statement: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    }))
}
Region.defaultProps = {
    label: 'Регион',
    controlId: 'regionSelector',
}
export default Region
