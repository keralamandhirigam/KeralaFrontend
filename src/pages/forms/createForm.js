import { Button, Card, Form } from 'antd';
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

        console.log(values);
        toast.success("Data created");
    };
    return (
        <div className={`${styles.Wrapper} ${styles.blur}`}>
            {/* <Toaster /> */}
            <Card>
                <Crud handleFinish={handleSubmit} form={form} />
                <Button type="primary" onClick={() => { form.submit() }}>Submit</Button>
            </Card>
        </div>
    )
}
