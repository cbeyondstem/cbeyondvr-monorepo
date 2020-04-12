import { MenuItem } from '@cbeyond/ui-kit'
import HomeIcon from '@material-ui/icons/Home'

export const menuItems: MenuItem[] = [
  // { name: 'HOME', path: '/' },
  { path: '/', Icon: HomeIcon },
  { name: 'AEROSPACE', path: '/aerospace' },
  { name: 'YACHTING', path: '/yachting' },
  { name: 'CONSUMER', path: '/consumer' },
  { name: 'ART', path: '/art' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' }
]
