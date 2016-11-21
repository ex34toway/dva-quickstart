import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import { Table, Popconfirm, Pagination, Menu, Dropdown, Icon } from 'antd';

function UserList({
  total, current, loading, dataSource,
  onPageChange,
  onDeleteItem,
  onEditItem,
}) {
  function handleMenuClick (e){
    // onClick={() => onEditItem(record)}
    switch (e.key){
      case '0':
          break;
      case '1':
          break;
      case '2':
        break;
    }
  }

  const dropdownTableMenu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="0">
          <a>编辑</a>
        </Menu.Item>
        <Menu.Item key="1">
          <Popconfirm title="确定要删除吗？">
            <a>删除</a>
          </Popconfirm>
        </Menu.Item>
        <Menu.Item key="2">3d menu item</Menu.Item>
      </Menu>
  );

  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: function(text,record) {
      var href = "/user/"+record.id;
      return (<Link to={href}>{text}</Link>);
    }
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: function(text, record){
        return (<Dropdown overlay={dropdownTableMenu}>
          <a className="ant-dropdown-link">dddd</a>
        </Dropdown>);
    },
  }];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
      />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={10}
        onChange={onPageChange}
      />
    </div>
  );
}

UserList.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  total: PropTypes.any,
  current: PropTypes.any,
};

export default UserList;
