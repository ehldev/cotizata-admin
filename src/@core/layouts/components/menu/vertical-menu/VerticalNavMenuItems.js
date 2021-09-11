// ** Vertical Menu Components
import VerticalNavMenuLink from './VerticalNavMenuLink'
import VerticalNavMenuGroup from './VerticalNavMenuGroup'
import VerticalNavMenuSectionHeader from './VerticalNavMenuSectionHeader'

// ** Utils
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@layouts/utils'
import useAuth from '../../../../../utility/hooks/useAuth'

const VerticalMenuNavItems = (props) => {
  const { isAdmin } = useAuth()

  // ** Components Object
  const Components = {
    VerticalNavMenuSectionHeader,
    VerticalNavMenuGroup,
    VerticalNavMenuLink
  }

  // ** Render Nav Menu Items
  const RenderNavItems = props.items.map((item, index) => {
    if (!isAdmin && item.meta?.restrict) return
    const TagName = Components[resolveNavItemComponent(item)]

    return <TagName key={item.id || item.header} item={item} {...props} />
  })

  return RenderNavItems
}

export default VerticalMenuNavItems
