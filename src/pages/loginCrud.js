import { Form, Grid, Typography } from 'antd'
import FormBuilder from 'antd-form-builder'
import React, { useEffect } from 'react'
const LoginCrud = ({ form, handleFinish }) => {
    const forceUpdate = FormBuilder.useForceUpdate();

    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();

    useEffect(() => {
        form.resetFields();
    }, [])

    const handleSubmit = (values => {
        handleFinish(values);
        console.log(values);
    });


    const meta = {

        columns: 4,
        formItemLayout: null,
        colon: true,
        fields: [
            {
                key: 'username', label: 'Name', colSpan: 4,
                rules: [{
                    required: true
                }]
            },
            {
                key: 'password', label: 'Password', colSpan: 4,
                rules: [{
                    required: true
                }]
            },

        ]
    }



    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} onSubmit={handleSubmit} onValuesChange={forceUpdate}>
            <FormBuilder meta={meta} form={form} />
        </Form>
    )
}

export default LoginCrud
