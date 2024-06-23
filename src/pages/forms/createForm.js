import { Button, Card, Col, Form, Grid, Row, Space } from 'antd';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import styles from '../home.module.scss';
import Crud from '../crud';
import Title from 'antd/es/typography/Title';

export const CreateForm = () => {
    const [form] = Form.useForm()
    const [currentRecord] = useState();
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const handleSubmit = (values) => {
        if (!currentRecord?.clientId) {
            const id = values?.name.substring(0, 3) + values?.whatNumber?.slice(0, 3)
            values['clientId'] = id
        }

        toast.success("Data created");
        form.resetFields();
        console.log(values);
    };
    console.log(screens)
    return (
        <div className={`${styles.Wrapper}`}>
            <Toaster />
            <Title className={styles.title}>Kerala</Title>
            <Row align='middle' justify='center' >
                <Col>
                    <Card className={`${styles.center}`}
                        style={{ width: 540}}>
                        <Crud handleFinish={handleSubmit} form={form} />
                        <Space>
                            <Button type="primary" onClick={() => { form.submit() }}>Submit</Button>
                            <Button type="" onClick={() => { form.resetFields() }}>Clear</Button>
                        </Space>
                    </Card>
                </Col>
            </Row>
            {/* <Modal
                title={`Update ${currentRecord?.name} Details`}
                open={true}
                centered
                okText="Update"
                maskClosable={false}
                onOk={() => { form.submit(); }}
                onCancel={() => { form.resetFields(); }}>
                <Divider />
                <Crud initialValues={currentRecord} handleFinish={handleSubmit} form={form} />
            </Modal> */}
        </div>
    )
}
