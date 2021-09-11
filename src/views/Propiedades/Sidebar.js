import SidebarBasic from '@components/sidebar'

const Sidebar = ({
  children,
  title = '',
  size = 'lg',
  open = false,
  onToggle = () => {},
  headerClassName = '',
  contentClassName = ''
}) => {
  return (
    <SidebarBasic
      size={size}
      open={open}
      title={title}
      toggleSidebar={onToggle}
      headerClassName={headerClassName}
      contentClassName={contentClassName}
    >
      {children}
    </SidebarBasic>
  )
}

export default Sidebar
