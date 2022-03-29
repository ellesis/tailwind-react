import {MdMonitor, MdOutlineSettingsSuggest} from 'react-icons/md'
import {FaMapMarkedAlt, FaTable} from 'react-icons/fa'

export const adminMenuItems = [
  {
    href: 'dashboard',
    title: 'Dashboard',
    iconTag: <MdMonitor />
  },
  {
    href: 'setting',
    title: 'Setting',
    iconTag: <MdOutlineSettingsSuggest />
  },
  {
    href: 'tables',
    title: 'Tables',
    iconTag: <FaTable />
  },
  {
    href: 'maps',
    title: 'Maps',
    iconTag: <FaMapMarkedAlt />
  }
]
