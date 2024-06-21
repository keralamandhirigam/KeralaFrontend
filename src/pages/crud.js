import { Form, Input, Select } from 'antd'
import FormBuilder from 'antd-form-builder'
import { City, State } from 'country-state-city';
import React, { useCallback, useEffect, useState } from 'react'

const Crud = ({ form, handleFinish }) => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [selectedState, setSelectedState] = useState('TN');
    const [selectedCity, setSelectedCity] = useState('');

    const handleSubmit = useCallback(values => {
        handleFinish(values);
        console.log(values);
    });

    useEffect(() => {
        const getStates = async () => {
            try {
                const result = await State.getStatesOfCountry('IN');
                let allStates = [];
                allStates = result?.map(({ isoCode, name }) => ({
                    isoCode,
                    name
                }));
                const [{ isoCode: firstState = '' } = {}] = allStates;
                setCities([]);
                setSelectedCity('');
                setStates(allStates);
                setSelectedState(`TN`);
            } catch (error) {
                setStates([]);
                setCities([]);
                setSelectedCity('');
            }
        };

        getStates();
    }, []);

    useEffect(() => {
        const getCities = async () => {
            try {
                const result = await City.getCitiesOfState(
                    'IN',
                    selectedState
                );
                let allCities = [];
                allCities = result?.map(({ name }) => ({
                    name
                }));
                const [{ name: firstCity = '' } = {}] = allCities;
                setCities(allCities);
                setSelectedCity();
            } catch (error) {
                setCities([]);
            }
        };

        getCities();
    }, [selectedState]);

    const StateWidget = () => {
       return (
        <Select
        showSearch
        placeholder="Select State"
        defaultValue="TN"
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        onChange={(event) => setSelectedState(event)}
        options={states?.map((stat) => ({
            label: stat?.name,
            value: stat?.isoCode
        }))}
    />
       )
    }
    const CityWidget = () => {
       return (
        <Select
        showSearch
        placeholder="Select City"
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        onChange={(event) => setSelectedCity(event)}
        options={cities?.map((cit) => ({
            label: cit?.name,
            value: cit?.name
        }))}
    />
       )
    }




    const meta = {
        columns: 4,
        formItemLayout: null,
        // initialValues,
        colon: true,
        fields: [
            { key: 'name', label: 'Name', colSpan: 2 },
            { key: 'whatNumber', label: 'Whatsapp Number', type: 'number', colSpan: 2 },
            { key: 'state', label: 'State', colSpan: 2, widget: StateWidget, forwardRef: true},
            { key: 'city', label: 'City', colSpan: 2, widget: CityWidget, forwardRef: true},
            { key: 'address', label: 'Address', widget: 'textarea', colSpan: 2 },
        ],
    }



    return (
        <Form layout="vertical" onSubmit={handleSubmit} form={form} >
            <FormBuilder meta={meta} form={form} />
        </Form>
    )
}

export default Crud
