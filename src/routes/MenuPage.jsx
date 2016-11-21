import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import MenuTree from '../components/Users/MenuTree';
import { InputNumber, Checkbox, Button, Switch  } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import PageRadio from '../components/RadioGroup/RadioGroup';
import styles from './MenuPage.less';


function onChange(value) {
  console.log('changed', value);
}

function onSwitchChange(checked) {
  console.log(`switch to ${checked}`);
}

function MenuPage({ location, dispatch }) {




  return (
      <MainLayout location={location}>
        <div className={styles.normal}>
          <MenuTree></MenuTree>
          <PageRadio></PageRadio>
          <Switch defaultChecked={false} onChange={onSwitchChange} />
        </div>
      </MainLayout>
  );
}

MenuPage.propTypes = {
};

export default MenuPage;