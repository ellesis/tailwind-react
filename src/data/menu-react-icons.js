import { FaHome, FaChartLine } from 'react-icons/fa' // Font awesome
import {
  BsEgg,
  BsLayoutThreeColumns,
  BsLayoutTextSidebarReverse,
  BsLayoutTextSidebar,
  BsInfoCircle,
  BsLayoutWtf
} from 'react-icons/bs' // Bootstrap
import { MdMenuBook, MdOutlineMailOutline } from 'react-icons/md' // Material-design
import { HiViewGridAdd } from 'react-icons/hi' //Hero Icons

export const siteTitle = 'Layout Menu'

export const menuItems = [
  {
    title: 'Home',
    href: '/',
    iconTag: <FaHome />
  },
  {
    title: 'About',
    href: '/about',
    iconTag: <BsInfoCircle />
  },
  {
    title: 'eChart',
    href: '/echart',
    iconTag: <FaChartLine />
  },
  {
    title: 'Food Recipes',
    href: '/food',
    iconTag: <MdMenuBook />
  },
  {
    title: 'Admin Dashboard',
    href: '/admin/dashboard',
    iconTag: <BsLayoutThreeColumns />
  },
  {
    title: 'Better Layout',
    href: '/Better',
    iconTag: <BsLayoutTextSidebarReverse />
  },
  {
    title: 'Right Slide Layout',
    href: '/right-slide',
    iconTag: <BsLayoutTextSidebar />
  },
  {
    title: 'Green Layout',
    href: '/green',
    iconTag: <HiViewGridAdd />
  },
  {
    title: 'Egg',
    href: '/egg',
    iconTag: <BsEgg />
  },
  {
    title: 'Components',
    href: '/components',
    iconTag: <BsLayoutWtf />
  },
  {
    title: 'Contact',
    href: '/contact',
    iconTag: <MdOutlineMailOutline />
  }
]
