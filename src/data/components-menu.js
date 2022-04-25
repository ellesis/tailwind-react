import { FaTable, FaWpforms } from 'react-icons/fa' // Font awesome
import { BsMenuButton, BsUiRadios, BsCreditCard2Front } from 'react-icons/bs' // Bootstrap
import { MdSmartButton } from 'react-icons/md' // Material-design

export const menuItems = [
  {
    title: 'Button',
    href: '/button',
    iconTag: <MdSmartButton />
  },
  {
    title: 'Radio Button',
    href: '/radio',
    iconTag: <BsUiRadios />
  },
  {
    title: 'Combo Select',
    href: '/combo',
    iconTag: <BsMenuButton />
  },
  {
    title: 'Card',
    href: '/card',
    iconTag: <BsCreditCard2Front />
  },
  {
    title: 'Table',
    href: '/table',
    iconTag: <FaTable />
  },
  {
    title: 'From',
    href: '/from',
    iconTag: <FaWpforms />
  }
]
