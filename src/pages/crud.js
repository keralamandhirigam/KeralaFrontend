import { Avatar, Form, Grid, Input, InputNumber, Select, Tag, Typography } from 'antd'
import FormBuilder from 'antd-form-builder'
import { City, State } from 'country-state-city';
import React, { useEffect, useState } from 'react'
import { Payment_Mode } from './constant';
const Crud = ({ form, handleFinish, initialValues }) => {
    const forceUpdate = FormBuilder.useForceUpdate();
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const { Text } = Typography;
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();

    useEffect(() => {
        form.resetFields();
    }, [initialValues])

    const handleCrudSubmit = (values => {
        handleFinish(values);
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
                setStates(allStates);
                setSelectedState(`TN`);
                setSelectedCity('');
            } catch (error) {
                setStates([]);
                setCities([]);
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

    const StateWidget = ({ value, onChange }) => {
        return (
            <Select
                value={value}
                showSearch
                placeholder="Select State"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                onChange={(value) => { setSelectedState(value); onChange(value) }}
                options={states?.map((stat) => ({
                    label: stat?.name,
                    value: stat?.isoCode
                }))}
            />
        );
    };
    const CityWidget = ({ value, onChange }) => {
        return (
            <Select
                value={value}
                showSearch
                placeholder="Select City"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                onChange={(event) => { setSelectedCity(event); onChange(event) }}
                options={cities?.map((cit) => ({
                    label: cit?.name,
                    value: cit?.name
                }))}
            />
        )
    }


    const PayMode = ({ value, onChange }) => {
        return (
            <Select
                value={value}
                showSearch
                placeholder="Select a Payment mode"
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                onChange={(event) => onChange(event)}
                options={Payment_Mode}
                optionRender={(option) => (

                    <div>
                        <Avatar size={25} icon={option?.data?.icon} />
                        <Text>{option?.data?.label}</Text>
                    </div>

                )}
            />
        )
    }

    const TotalAmountWidget = ({ value, onChange }) => {
        const handleInputChange = (inputValue) => {
            const parsedValue = parseFloat(inputValue.replace(/₹\s?|(,*)/g, ''));
            onChange(parsedValue);
        };

        return (
            <InputNumber
                value={value}
                style={{width: `900px`}}
                formatter={value => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/^₹\s?|(,*)/g, '')}
                onBlur={(e) => handleInputChange(e.target.value)}
            />
        );
    };

    const BalanceWidget = ({ value, onChange }) => {
        const handleInputChange = (inputValue) => {
            const parsedValue = parseFloat(inputValue.replace(/₹\s?|(,*)/g, ''));
            onChange(parsedValue);
        };

        return (
            <>

                <InputNumber
                    value={value}
                    formatter={value => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/^₹\s?|(,*)/g, '')}
                    onBlur={(e) => handleInputChange(e.target.value)}
                />
            </>
        );
    };

    const meta = {
       
        columns: 4,
        formItemLayout: null,
        initialValues,
        colon: true,
        fields: [
            { key: 'name', label: 'Name', colSpan: `${ screens?.xs && 4 || screens?.xl && 2 || screens?.sm && 2}` },
            { key: 'phoneNumber', label: 'Whatsapp Number', type: 'number', colSpan: `${ screens?.xs && 4 || screens?.xl && 2 || screens?.sm && 2}` },
            { key: 'state', label: 'State', widget: StateWidget, colSpan: `${ screens?.xs && 4 || screens?.xl && 2 || screens?.sm && 2}` },
            { key: 'city', label: 'City', widget: CityWidget, forwardRef: true, colSpan: `${ screens?.xs && 4 || screens?.xl && 2 || screens?.sm && 2}` },
            { key: 'address', label: 'Address', widget: 'textarea', colSpan: `${ screens?.xs && 4 || screens?.xl && 2 || screens?.sm && 2}` },
            { key: 'paymentMode', label: 'Payment Mode', widget: PayMode, colSpan: `${ screens?.xs && 4 || screens?.xl && 2 || screens?.sm && 2}`},
            { key: 'totalAmount', label: 'Total Amount', widget: TotalAmountWidget, forwardRef: true , colSpan: `${ screens?.xs && 4 || screens?.xl && 2|| screens?.sm && 2}`},
            { key: 'amountPaid', label: 'Paid', widget: BalanceWidget, forwardRef: true, colSpan: `${ screens?.xs && 4 || screens?.xl && 2 || screens?.sm && 2}`},
            { key: 'balanceDue', label: 'Balance', widget: BalanceWidget, forwardRef: true, colSpan: `${ screens?.xs && 4 || screens?.xl && 1.3 || screens?.sm && 2}`}, 
            { key: 'remark', label: 'Remark', widget: 'textarea', colSpan: 4 },
        ]
    }



    return (
        <Form form={form} layout="vertical" onFinish={handleCrudSubmit} onSubmit={handleCrudSubmit} onValuesChange={forceUpdate}>
            <FormBuilder meta={meta} form={form} />
        </Form>
    )
}

export default Crud
