import React, { Component } from 'react'
import AsyncSelect from 'react-select/async';

export default class Hotel extends Component {
    state = { selectedUsers: [] }

    onChange = selectedUsers => {
        this.setState({
            selectedUsers: selectedUsers || []
        })
    }

    loadOptions = async (inputText, callback) => {
        const res = await fetch(`https://api.masterdiskon.com/v1/apitrav/booking/autocomplete?product=hotel&q=${inputText}`)
        const json = await res.json()

        callback(json.data.map(i => ({ label: i.fullname, value: i.id })))
        console.log("🚀 ~ file: SelectHotel.js ~ line 16 ~ Hotel ~ loadOptions= ~ json", json)
    }

    render() {
        return (
            <AsyncSelect onChange={this.onChange} value={this.state.selectedUsers} loadOptions={this.loadOptions} isClearable />
        )
    }
}
