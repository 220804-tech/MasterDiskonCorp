import React, { Component } from 'react'
import AsyncSelect from 'react-select/async';

export default class Flight extends Component {
    state = { selectedUsers: [] }

    onChange = selectedUsers => {
        this.setState({
            selectedUsers: selectedUsers || []
        })
    }

    loadOptions = async (inputText, callback) => {
        const res = await fetch(`https://api.masterdiskon.com/v1/booking/autocomplete?product=flight&q=${inputText}`)
        const json = await res.json()

        callback(json.data.map(i => ({ label: i.text, value: i.id })))
    }

    render() {
        return (
            <AsyncSelect onChange={this.onChange} value={this.state.selectedUsers} loadOptions={this.loadOptions} isClearable />
        )
    }
}
