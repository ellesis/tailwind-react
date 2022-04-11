import {MdMonitor, MdOutlineSettingsSuggest} from 'react-icons/md'
import {FaMapMarkedAlt, FaTable} from 'react-icons/fa'

export const adminMenuItems = [
  {
    title: 'Dashboard',
    href: 'dashboard',
    iconTag: <MdMonitor />
  },
  {
    title: 'Setting',
    href: 'setting',
    iconTag: <MdOutlineSettingsSuggest />
  },
  {
    title: 'Tables',
    href: 'tables',
    iconTag: <FaTable />
  }
  // {
  //   title: 'Maps',
  //   href: 'maps',
  //   iconTag: <FaMapMarkedAlt />
  // }
]
