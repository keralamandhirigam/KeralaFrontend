import React, { useEffect, useState } from 'react';
import { Divider, Flex, Form, Modal, Space, Table, Tooltip, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import styles from './data.module.scss'
import { EditOutlined } from '@ant-design/icons';
import Crud from './crud';
import { sampleData } from './constant';
import Sider from 'antd/es/layout/Sider';

const DataTable = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  const [userList, setUserList] = useState();
  const [form] = Form.useForm();
  const { Text } = Typography;
  useEffect(() => {
    getData();
  },[])

  const getData = () => {
    setUserList(sampleData)
  }

  const handleSubmit = (values) => {
    form.resetFields();
  }
 

  const columns = [
    {
      title: 'Client Id',
      width: 70,
      dataIndex: 'clientId',
      key: 'clientId',
      fixed: 'left',
    },
    {
      title: 'Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      // fixed: 'left',
    },

    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      width: 100,
      render: (row) => <Text>₹ {row}</Text>
    },
    {
      title: 'Amount Paid',
      dataIndex: 'amountPaid',
      key: 'amountPaid',
      width: 100,
      render: (row) => <Text>₹ {row}</Text>
    },
    {
      title: 'Balance Due',
      dataIndex: 'balanceDue',
      key: 'balanceDue',
      width: 100,
      render: (row) => <Text>₹ {row}</Text>
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
      width: 150,
      render: (row) =>  <Tooltip title={row}><Text>{row}</Text></Tooltip>,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: '',
      key: 'operation',
      fixed: 'right',
      width: 35,
      render: (row) => <div className={styles.TableIconHover} onClick={(e) => { setModalOpen(!isModalOpen); setCurrentRecord(row); form.resetFields(); }}><EditOutlined /></div>,
    },
  ];
  return (
    <div>
      <Flex justify='end' className={styles.Avatar}>
        <Space>
          <Search
            placeholder="Search"
            allowClear
            enterButton
            className={styles.search}
            onSearch={(e) => console.log(e)}
            onChange={(e) => console.log(e.target.value)}

          />
        </Space>
      </Flex>
      <Table
        rowKey='clientId'
        columns={columns}
        dataSource={userList}
        scroll={{
          x: 1500,
          y: 300,
        }}
      />

      <Modal
        title={`Update ${currentRecord?.name} Details`}
        open={isModalOpen}
        centered
        okText="Update"
        maskClosable={false}
        onOk={()=>{setCurrentRecord(); form.submit(); setModalOpen(!isModalOpen); }}
        onCancel={ () => {setCurrentRecord(); form.resetFields(); setModalOpen(false);}}>
        <Divider />
        <Crud initialValues={currentRecord} handleFinish={handleSubmit} form={form} />
      </Modal>

    </div>
  )
}
export default DataTable;