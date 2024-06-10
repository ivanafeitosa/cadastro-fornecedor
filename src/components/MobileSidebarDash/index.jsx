
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-router-dom';


export default function MobileSidebarDash() {
    const [visible, setVisible] = useState(false);

    return(
        <div className="md:hidden pt-6 pl-6">
            <button className="bg-blue-500 hover:bg-blue-800 p-button p-component" onClick={() => setVisible(true)}>Menu</button>
            <Sidebar className='bg-indigo-800' visible={visible} onHide={() => setVisible(false)}>
                <h1 className='py-4 text-white'>ORGPROCESS</h1>
                <nav>
                    <ul className='flex flex-column p-0 gap-4'>
                        <li>
                            <Link className='text-white' to={'/dashboard'}>Dashboard</Link>
                        </li>
                        <li>
                            <Link className='text-white' to={'/dashboard/produtos'}>Produtos</Link>
                        </li>
                        <li>
                            <Link className='text-white' to={'/dashboard/marcas'}>Marcas</Link>
                        </li>
                        <li>
                            <Link className='text-white' to={'/dashboard/categorias'}>Categorias</Link>
                        </li>
                    </ul>
                </nav>
            </Sidebar>
        </div>
    )
}
        