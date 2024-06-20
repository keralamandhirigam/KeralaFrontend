import { Avatar, Button, Card, Divider, Form, Input, InputNumber, Select, Space, Typography } from 'antd';
import PhoneInput from 'antd-phone-input';
import Meta from 'antd/es/card/Meta';
import TextArea from 'antd/es/input/TextArea';
import { City, Country, State } from 'country-state-city';
import React, { useEffect, useId, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Payment_Mode } from './constant';
import styles from './home.module.scss';
import nextId from 'react-id-generator';
const { Text } = Typography;
export const CreateForm = () => {
    const [currentRecord, setCurrentRecord] = useState();

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');


    useEffect(() => {
        const getCountries = async () => {
            try {
                setIsLoading(true);
                const result = await Country.getAllCountries();
                let allCountries = [];
                allCountries = result?.map(({ isoCode, name }) => ({
                    isoCode,
                    name
                }));
                const [{ isoCode: firstCountry } = {}] = allCountries;
                setCountries(allCountries);
                setSelectedCountry(`IN`);
                setIsLoading(false);
            } catch (error) {
                setCountries([]);
                setIsLoading(false);
            }
        };

        getCountries();
    }, []);

    useEffect(() => {
        const getStates = async () => {
            try {
                const result = await State.getStatesOfCountry(selectedCountry);
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
    }, [selectedCountry]);

    useEffect(() => {
        const getCities = async () => {
            try {
                const result = await City.getCitiesOfState(
                    selectedCountry,
                    selectedState
                );
                let allCities = [];
                allCities = result?.map(({ name }) => ({
                    name
                }));
                const [{ name: firstCity = '' } = {}] = allCities;
                setCities(allCities);
                setSelectedCity('TN');
            } catch (error) {
                setCities([]);
            }
        };

        getCities();
    }, [selectedState]);


    const handleOnFinish = (values) => {
        if(!currentRecord?.clientId){
            const id = values?.name.substring(0,3) + values?.whatNumber?.phoneNumber?.slice(0, 3)
            

            values['clientId'] = id

          }

        console.log(values);
        toast.success("Data created");
    };



    return (
        <div className={`${styles.Wrapper} ${styles.blur}`}>
            <Toaster />
            <Card
                hoverable
                style={{
                    width: 470,
                }}
            >
                <Meta title="Client Create" style={{ textAlign: 'center' }} />
                <Divider />
                <Form onFinish={handleOnFinish}
                    name="wrap"
                    labelCol={{
                        flex: '110px',
                    }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{
                        flex: 1,
                    }}
                    colon={false}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item
                        label="Name :"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter Name'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Address :"
                        name="address"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Whatsapp Number :"
                        name="whatNumber"
                    >
                        <PhoneInput  defaultCountry="IN"  countries={['IN']} enableSearch onChange={(e)=>console.log(e)}/>
                    </Form.Item>
                    <Form.Item
                        label="Country :"
                        name="country"
                    >
                        <Select
                            showSearch
                            placeholder="Select Countrie"
                            defaultValue="IN"
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            onChange={(event) => setSelectedCountry(event)}
                            options={countries?.map((count) => ({
                                label: count?.name,
                                value: count?.isoCode
                            }))}
                        />
                    </Form.Item>
                    <Form.Item
                        label="State :"
                        name="state"
                    >

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
                    </Form.Item>
                    <Form.Item
                        label="City :"
                        name="city"
                    >
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
                    </Form.Item>
                    <Form.Item
                        label="Remark :"
                        name="remark"
                    >
                        <TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Payment mode:"
                        name="Payment"
                    >
                        <Select
                            showSearch
                            placeholder="Select a Payment mode"
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={Payment_Mode}
                            optionRender={(option) => (

                                <div className={styles.statusWrapper}>
                                    <Avatar size={25} icon={option?.data?.icon} />
                                    <Text>{option?.data?.label}</Text>
                                </div>

                            )}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Balance :"
                        name="balance"
                    >
                        <InputNumber
                            formatter={value => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/^₹\s?|(,*)/g, '')}
                            onChange={(e) => console.log(e)}
                        />
                    </Form.Item>

                    <Form.Item label="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Space>

                            <Button type="" htmlType="reset">
                                Clear
                            </Button>
                            <Button type="primary" htmlType="submit" loading={false}>
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                    <Form.Item label="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    </Form.Item>

                </Form>
            </Card>
        </div>
    )
}
