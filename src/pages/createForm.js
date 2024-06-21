import { Avatar, Button, Card, Divider, Form, Input, InputNumber, Select, Space, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import TextArea from 'antd/es/input/TextArea';
import { City, State } from 'country-state-city';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Payment_Mode } from './constant';
import styles from './home.module.scss';
const { Text } = Typography;
export const CreateForm = () => {
    const [currentRecord, setCurrentRecord] = useState();

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [selectedState, setSelectedState] = useState('TN');
    const [selectedCity, setSelectedCity] = useState('');


 

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
                    <Input type='number' addonBefore="+91" onChange={(e) => console.log(e)} />
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
