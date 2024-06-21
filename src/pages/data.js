import React, { useState } from 'react';
import { Button, Flex, Form, Modal, Space, Table } from 'antd';
import Search from 'antd/es/input/Search';
import styles from './data.module.scss'
import { EditOutlined } from '@ant-design/icons';
import Crud from './crud';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const DataTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm()

  const handleSubmit =(values)=>{
    console.log(values);
  }

  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: '',
      key: 'operation',
      fixed: 'right',
      width: 35,
      render: () => <div className={styles.TableIconHover} onClick={() => setIsModalOpen(true)}><EditOutlined /></div>,
    },
  ];
  return (
    <div>
      <Flex justify='end' className={styles.Avatar}>
        <Space>
          <Search
            placeholder="Search"
            allowClear
            enterButton="Search"
            className={styles.search}
            onSearch={(e) => console.log(e)}
            onChange={(e) => console.log(e.target.value)}
          />
          {/* <Button type="primary" onClick={()=>setIsModalOpen(true)}>Create</Button> */}
        </Space>
      </Flex>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1500,
          y: 300,
        }}
      />


      <Modal title="Basic Modal" open={isModalOpen} onOk={() => {form.submit();}} onCancel={() => {setIsModalOpen(!isModalOpen); form.resetFields()}}>
       <Crud handleFinish={handleSubmit} form={form}/>
      </Modal>

    </div>
  )
}
export default DataTable;