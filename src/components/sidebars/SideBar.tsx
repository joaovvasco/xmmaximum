import './SideBar.css'

const Sidebar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children}) => {
    return <div className='sidebar'>
        {children}
    </div>
}

export default Sidebar