import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';


function LocationSearchInput(props) {


    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    return (
        <PlacesAutocomplete
            value={props.value}
            onChange={props.onChange}
            onSelect={handleSelect}

        >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                <div>
                    <input
                        style={{ height: "45px", width: "510px", fontSize: "1.3em", fontFamily: "Roboto, Ubuntu", backgroundColor: "white", border: "0.5px solid #cdcdcd" }}
                        {...getInputProps({
                            placeholder: 'Anywhere',
                            className: 'location-search-input',
                        })}
                    />
                    <div className="autocomplete-dropdown-container">
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
}

export default LocationSearchInput;
