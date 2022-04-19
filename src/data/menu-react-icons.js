import { FaQuestion, FaHome } from 'react-icons/fa'
import { MdOutlineSpaceDashboard, MdMonitor, MdOutlineSettingsSuggest } from 'react-icons/md'
import { BsEgg, BsLayoutThreeColumns, BsLayoutTextSidebarReverse, BsLayoutTextSidebar } from 'react-icons/bs' // Bootstrap Icons

export const siteTitle = 'Layout Menu'

export const menuItems = [
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
  }
]
