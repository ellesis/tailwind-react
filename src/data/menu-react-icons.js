import { FaHome, FaChartLine } from 'react-icons/fa' // Font Awesome
import {
  BsEgg,
  BsLayoutThreeColumns,
  BsLayoutTextSidebarReverse,
  BsLayoutTextSidebar,
  BsInfoCircle,
  BsLayoutWtf,
  BsFillQuestionCircleFill
} from 'react-icons/bs' // Bootstrap Icons
import { MdMenuBook, MdOutlineSpaceDashboard, MdMonitor, MdOutlineSettingsSuggest } from 'react-icons/md' // Material-UI

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
    iconTag: <BsFillQuestionCircleFill />
  }
]
