import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Divider } from 'primereact/divider';


const Fornecedores = () => {
    return(
        <>
            <h2 className="flex justify-content-between align-items-center">
                Fornecedores
                <Button 
                    label='Novo fornecedor'
                    icon={'pi pi-plus'}
                    className='bg-indigo-600 hover:bg-indigo-800 gap-3 border-0'
                />
            </h2>
            <DataTable
                className='mt-4'
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}
            >
                <Column 
                    field={'nome'}
                    header={'Nome'}
                />
                <Column 
                    field={'cnpj'}
                    header={'CNPJ'}
                />
                <Column 
                    field={'email'}
                    header={'E-mail'}
                />
                <Column 
                    field={'telefone'}
                    header={'Telefone'}
                />
                <Column 
                    field={'status'}
                    header={'Status'}
                />
                <Column 
                    header={'Ações'}
                    bodyClassName={'w-2'}
                    body={() => (
                        <div className='flex gap-2'>
                            <Button
                                rounded
                                icon={'pi pi-pencil'}
                                className='bg-indigo-600 hover:bg-indigo-800 border-0'

                            />
                            <Button
                                rounded
                                icon={'pi pi-trash'}
                                className='bg-indigo-600 hover:bg-indigo-800 border-0'
                            />
                        </div>   
                    )}
                />
                
            </DataTable>
            
        </>
    );
}

export default Fornecedores;