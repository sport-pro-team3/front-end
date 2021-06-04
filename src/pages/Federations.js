import React from "react";

import "antd/dist/antd.css";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <SubMenu title="Национальные виды спорта">
      <Menu.Item>Курош</Menu.Item>
      <Menu.Item>Конные скачки</Menu.Item>
      <Menu.Item>Кок-Бору</Menu.Item>
      <Menu.Item>Кулатуу</Menu.Item>
      <Menu.Item>Национальная классическая борьба</Menu.Item>
    </SubMenu>
    <SubMenu title="Олимпийские виды спорта">
      <Menu.Item>Баскетбол</Menu.Item>
      <Menu.Item>Биатлон</Menu.Item>
      <Menu.Item>Бокс</Menu.Item>
      <Menu.Item>Бадминтон</Menu.Item>
      <Menu.Item>Велоспорт-шоссе</Menu.Item>
    </SubMenu>
    <SubMenu title="Неолимпийские виды спорта">
      <Menu.Item>Айкидо</Menu.Item>
      <Menu.Item>Альпинизм</Menu.Item>
      <Menu.Item>Армспорт</Menu.Item>
      <Menu.Item>Бильярдный спорт</Menu.Item>
      <Menu.Item>Бодибилдинг</Menu.Item>
    </SubMenu>
    <SubMenu title="Виды спортов Пара и Сурдо (ЛОВЗ)">
      <Menu.Item>Академическая гребля</Menu.Item>
      <Menu.Item>Бочче</Menu.Item>
      <Menu.Item>Баскетбол на колесах</Menu.Item>
      <Menu.Item>Волейбол сидя</Menu.Item>
      <Menu.Item>Голбол</Menu.Item>
    </SubMenu>
  </Menu>
);

export const Federations = () => {
  return (
    <Dropdown overlay={menu}>
      <Link className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Федерации <DownOutlined />
      </Link>
    </Dropdown>
  );
};
