import { Dropdown, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link to="/" rel="noopener noreferrer">
        1st menu item
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        to="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        2nd menu item
      </Link>
    ),
    key: "1",
  },
];
const items1 = [
  {
    label: (
      <Link to="/product" rel="noopener noreferrer">
        임신/출산 (~0개월)
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        신생아 (1~3개월)
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        베이비 (4~23개월)
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        키즈(24개월~)
      </Link>
    ),
    key: "3",
  },
];
const items2 = [
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        살균기
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        기타제품
      </Link>
    ),
    key: "0",
  },
];
const items3 = [
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        유아교구
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="_blank" rel="noopener noreferrer">
        애착인형
      </Link>
    ),
    key: "1",
  },
];
const items4 = [
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        기저귀
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="_blank" rel="noopener noreferrer">
        목욕용품
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/" target="_blank" rel="noopener noreferrer">
        위생용품/기타
      </Link>
    ),
    key: "2",
  },
];
const items5 = [
  {
    label: (
      <Link to="/" target="" rel="noopener noreferrer">
        수유용품
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/" target="_blank" rel="noopener noreferrer">
        모유용품
      </Link>
    ),
    key: "1",
  },
];
const community6 = [
  {
    label: (
      <Link to="/commu" target="" rel="noopener noreferrer">
        공지사항
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/commu" target="" rel="noopener noreferrer">
        소통해요
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/commu" target="" rel="noopener noreferrer">
        1대1 문의
      </Link>
    ),
    key: "2",
  },
];
const BasicMenu = () => {
  return (
    <ul className="head-drop">
      <Dropdown
        menu={{
          items: items1,
        }}
      >
        <a onClick={e => e.preventDefault()}>
          <Space>
            이유식
            {/* <DownOutlined /> */}
          </Space>
        </a>
      </Dropdown>

      <Dropdown
        menu={{
          items: items2,
        }}
      >
        <a onClick={e => e.preventDefault()}>
          <Space>
            유아가전
            {/* <DownOutlined /> */}
          </Space>
        </a>
      </Dropdown>

      <Dropdown
        menu={{
          items: items3,
        }}
      >
        <a onClick={e => e.preventDefault()}>
          <Space>
            놀이용품
            {/* <DownOutlined /> */}
          </Space>
        </a>
      </Dropdown>
      <Dropdown
        menu={{
          items: items4,
        }}
      >
        <a onClick={e => e.preventDefault()}>
          <Space>
            위생용품
            {/* <DownOutlined /> */}
          </Space>
        </a>
      </Dropdown>
      <Dropdown
        menu={{
          items: items5,
        }}
      >
        <a onClick={e => e.preventDefault()}>
          <Space>
            모유/수유용품
            {/* <DownOutlined /> */}
          </Space>
        </a>
      </Dropdown>
      <Dropdown
        menu={{
          items: community6,
        }}
      >
        <a onClick={e => e.preventDefault()}>
          <Space>
            커뮤니티
            {/* <DownOutlined /> */}
          </Space>
        </a>
      </Dropdown>
    </ul>
  );
};

export default BasicMenu;
