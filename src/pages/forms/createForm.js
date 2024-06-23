import { Button, Card, Form, Space } from 'antd';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import styles from '../home.module.scss';
import Crud from '../crud';

export const CreateForm = () => {
    const [form] = Form.useForm()
    const [currentRecord] = useState();

    const handleSubmit = (values) => {
        if (!currentRecord?.clientId) {
            const id = values?.name.substring(0, 3) + values?.whatNumber?.slice(0, 3)
            values['clientId'] = id
        }

        toast.success("Data created");
        form.resetFields();
    };
    return (
        <div className={`${styles.Wrapper} ${styles.blur}`}>
            <Toaster />
            <Card>
                <Crud handleFinish={handleSubmit} form={form} />
                <Space>

                <Button type="primary" onClick={() => { form.submit() }}>Submit</Button>
                <Button type="" onClick={() => { form.resetFields() }}>Clear</Button>
                </Space>
            </Card>
        </div>
    )
}
