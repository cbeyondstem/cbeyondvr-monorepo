import { MenuItem } from '@cbeyond/ui-kit'
import HomeIcon from '@material-ui/icons/Home'

export const menuItems: MenuItem[] = [
  // { name: 'HOME', path: '/' },
  { path: '/', Icon: HomeIcon },
  { name: 'ABOUT', path: '/about' },
  { name: 'ARCHITECTURE', path: '/architecture' },
  { name: 'INTERIORS', path: '/interiors' },
  { name: 'FURNITURE/LIGHTS', path: '/furniture' },
  { name: 'CONTACT', path: '/contact' }
]
