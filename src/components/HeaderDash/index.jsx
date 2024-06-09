import { Link } from 'react-router-dom';


const HeaderDash = () => {
    return(
        <header className='w-1/5 h-screen bg-indigo-800 p-3 text-white'>
            <h1 className='py-4'>ORGPROCESS</h1>
            <nav>
                <ul className='flex flex-column p-0 gap-4'>
                    <li>
                        <Link className='text-white' to={'/dashboard'}>Analises</Link>
                    </li>
                    <li>
                        <Link className='text-white' to={'/dashboard/fornecedores'}>Fornecedores</Link>
                    </li>
                    <li>
                        <Link className='text-white' to={'/dashboard/orcamentos'}>Orçamentos</Link>
                    </li>
                    <li>
                        <Link className='text-white' to={'/dashboard/materiais'}>Materiais</Link>
                    </li>
                    <li>
                        <Link className='text-white' to={'/'}>Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderDash;