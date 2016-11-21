import React from 'react';
import { Link } from 'dva/router';
import { Steps, Icon, Tooltip } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './MenuPage.less';

const Step = Steps.Step;

function RegPage({ location, dispatch }) {
  return (
      <MainLayout location={location}>
        <div className={styles.normal}>
          <Steps size="small" current={1}>
            <Step title="Finished"/>
            <Step title="In Progress"/>
            <Step title="Waiting"/>
          </Steps>
        </div>
      </MainLayout>
  );
}

RegPage.propTypes = {
};

export default RegPage;