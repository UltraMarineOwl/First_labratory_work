import { Form, Input, Button, Checkbox } from 'antd';
import {useEffect, useState} from "react";

export const Forms = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
        const saved = localStorage.getItem('values');
        const saved1 = JSON.stringify(values);
        console.log(saved);
        if (saved == saved1){
            alert("Success of input");
        }
        if (values != localStorage.getItem('values')){
            localStorage.setItem('values', JSON.stringify(values));
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        alert("Not enough data performed")
    };

    const checkStorage = (values : any ) => {
        const storedData = localStorage.getItem(values);
        alert(storedData);
        if (!storedData) console.log('Local storage is empty');
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};