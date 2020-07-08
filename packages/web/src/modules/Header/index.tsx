import React from "react";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

function handleClick(info: { key: any; }) {
  console.log(`clicked ${info.key}`);
  console.log(info);
}

const Header = () => 
<div style={{ margin: 20 }}>

<Menu onClick={handleClick}  mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          <Link to={`/viewraw`}>
          전체목록
          </Link>
        </Menu.Item>
        <Menu.SubMenu icon={<SettingOutlined />} title="데이터입력">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">
              <Link to={`/insertyear`}>
                연도입력
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Link to={`/insertmonth`}>
                월입력
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          <Link to={`/createedb`}>
          게시판생성
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            외부링크 주소 연결
          </a>
        </Menu.Item> */}
      </Menu>
</div>;


export default Header;