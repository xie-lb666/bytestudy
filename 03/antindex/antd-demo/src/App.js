import { Row, Col,Menu,Input   ,Dropdown } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  SmallDashOutlined 
} from '@ant-design/icons';

import './App.css';
function App() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item  disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
    <div className="App">
    <Row justify="space-around" align="Middle"  className="header">
      <Col span={4}>
        <h1>
        <a id="logo" href="/">
          <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />Ant Design</a>
        </h1>
      </Col>
      <Col span={4}> <div className="searchinput"> <Input placeholder="Basic usage"  /></div></Col>
      <Col span={16} >
        <div className="headeritem">
      <Menu mode="horizontal" id="menu">
        <Menu.Item key="mail" >
          设计
        </Menu.Item>
        <Menu.Item key="wd"  >
          文档
        </Menu.Item>
        <Menu.Item key="zj"  >
          组件
        </Menu.Item>
        <Menu.Item key="zy"  >
          资源
        </Menu.Item>
        <Menu.Item key="jx"  >
          国内镜像
        </Menu.Item>
        <Menu.Item key="gd">
       <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    <SmallDashOutlined />
    </a>
  </Dropdown>
        </Menu.Item>
      </Menu>
      </div>
      </Col>
    </Row>
    <Row justify="center">
      <div className="banner">
        <img src="https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg"></img>
      </div>
    </Row>
   </div>
  );
}
export default App;
