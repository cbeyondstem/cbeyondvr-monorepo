import { MenuItem } from '@cbeyond/ui-kit'
import HomeIcon from '@material-ui/icons/Home'

export const menuItems: MenuItem[] = [
  // { name: 'HOME', path: '/' },
  { path: '/', Icon: HomeIcon },
  { name: 'ABOUT', path: '/about' },
  { name: 'SHOP', path: '/shop' },
  { name: 'PROCESS', path: '/process' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT', path: '/contact' }
]
