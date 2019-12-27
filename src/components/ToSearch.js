import React from 'react'

export default function ToSearch(list) {

    const lowercasedFilter = filter.toLowerCase();
    const filteredstaff = this.props.list.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
        <div>
            {this.state.commodities}
        </div>
    )
}
