import React, { PropTypes } from 'react';
import { Tree, Tooltip } from 'antd';

import styles from './MenuTree.less';

const TreeNode = Tree.TreeNode;

const MenuTree = React.createClass({
  getDefaultProps() {
    return {
      keys: [],
      autoExpandParent: true,
      defaultExpandAll: true
    };
  },
  getInitialState() {
    const keys = this.props.keys;
    return {
      defaultExpandedKeys: keys,
      defaultSelectedKeys: keys,
      defaultCheckedKeys: keys,
    };
  },
  onSelect(data,e) {
    this.setState({
      expandedKeys: data,
      autoExpandParent: true
    });
  },
  onCheck(info) {
    console.log('onCheck', info);
  },
  render() {
    return (
        <Tree className="myCls"
              defaultExpandedKeys={this.state.defaultExpandedKeys}
              defaultSelectedKeys={this.state.defaultSelectedKeys}
              defaultCheckedKeys={this.state.defaultCheckedKeys}
              onSelect={this.onSelect} onCheck={this.onCheck}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0">
              <TreeNode title="leaf 1-0-0" key="0-0-0-0"/>
              <TreeNode title="leaf 1-0-1" key="0-0-0-1"/>
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="leaf 1-1-0" key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
    );
  },
});

export default MenuTree;
