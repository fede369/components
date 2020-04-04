import React from 'react';
import SelectAdult from '../elements/selectAdult';
import SelectChildren from '../elements/selectChildren';
import DataPicker from '../elements/dataPicker';
import LocationSearchInput from '../elements/selectWhere'

export default {
    title: 'Selection',
};

export const Select_Adult = () => <SelectAdult />;
export const Select_Children = () => <SelectChildren />;
export const Data_Picker = () => <DataPicker id="checkin" />;
export const Location_Search_Input = () => <LocationSearchInput /> 
