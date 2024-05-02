import React, { ReactNode} from 'react'
import Link from "next/link"
import { useRouter } from 'next/router';

//components
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/sidebar';

interface DashboardProps {
    children: ReactNode;
  }


const layout: React.FC<DashboardProps> = ({children}) => {
  return (
    <div>
        <div>
            {/* <Sidebar/> */}
        </div>
        <div>
            {/* <AdminNavbar/> */}
            {children}
        </div>
    </div>
  )
}

export default layout