import {FaHome, FaTable, FaWpforms} from 'react-icons/fa' // Font awesome
import {BsMenuButton, BsUiRadios, BsCreditCard2Front} from 'react-icons/bs' // Bootstrap
import {MdSmartButton, MdOutlineCheckBox, MdCheckBoxOutlineBlank, MdFace} from 'react-icons/md' // Material-design

export const menuItems = [
  {
    title: 'Home',
    href: '/',
    iconTag: <FaHome />
  },
  {
    title: 'Card',
    href: 'card',
    iconTag: <BsCreditCard2Front />
  },
  {
    title: 'Button',
    href: 'button',
    iconTag: <MdSmartButton />
  },
  {
    title: 'Input',
    href: 'input',
    iconTag: <MdCheckBoxOutlineBlank />
  },
  {
    title: 'Radio',
    href: 'radio',
    iconTag: <BsUiRadios />
  },
  {
    title: 'Check',
    href: 'check',
    iconTag: <MdOutlineCheckBox />
  },
  {
    title: 'Combo Select',
    href: 'combo',
    iconTag: <BsMenuButton />
  },
  {
    title: 'Table',
    href: 'table',
    iconTag: <FaTable />
  },
  {
    title: 'From',
    href: 'form',
    iconTag: <FaWpforms />
  },
  {
    title: 'Avatar',
    href: 'avatar',
    iconTag: <MdFace />
  }
]
