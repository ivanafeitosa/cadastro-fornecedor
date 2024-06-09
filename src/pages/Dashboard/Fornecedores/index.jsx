import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';
import { useBuscarFornecedores, useCriarFornecedor, useDeletarFornecedor, useEditarFornecedor } from '../../../hooks/FornecedorHooks';
import { useRef, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { useForm, Controller } from 'react-hook-form';


const Fornecedores = () => {

    const aviso = useRef();
    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);

    const { data: fornecedores } = useBuscarFornecedores();
    const { mutateAsync: criarFornecedor } = useCriarFornecedor();
    const { mutateAsync: editarFornecedor } = useEditarFornecedor();
    const { mutateAsync: deletarFornecedor } = useDeletarFornecedor();

    const { register, handleSubmit, reset, setValue, control } = useForm();
    const { 
        register: registerEdit,
        handleSubmit: handleSubmitEdit,
        reset: resetEdit,
        setValue: setValueEdit,
        control: controlEdit 
    } = useForm();

    const status = ["Contratado", "Pendente", "Não Contratado"];


    function criar(dados) {
        criarFornecedor(dados, {
            onSuccess: () => {
                setVisibleCreate(false);
                reset();
                aviso.current.show({
                    severity: 'success',
                    summary: 'Aviso:',
                    detail: 'Categoria criada com sucesso!'
                })
            },
            onError: (error) => {
                aviso.current.show({
                    severity: 'error',
                    summary: 'Aviso:',
                    detail: error.message
                })
            }
        });  
    }

    function editar(dados) {
        editarFornecedor(dados, {
            onSuccess: () => {
                setVisibleEdit(false);
                resetEdit();
                aviso.current.show({
                    severity: 'success',
                    summary: 'Aviso:',
                    detail: 'Categoria atualizada com sucesso!'
                })
            },
            onError: (error) => {
                aviso.current.show({
                    severity: 'error',
                    summary: 'Aviso:',
                    detail: error.message
                })
            }
        });  
    }

    function deletar(id) {
        confirmDialog({
            header: 'Aviso:',
            message: 'Deseja realmente apagar este item?',
            acceptLabel:'Sim',
            rejectLabel: 'Não',
            accept: () => {
                deletarFornecedor(id, {
                    onSuccess: () => {
                        aviso.current.show({
                            severity: 'success',
                            summary: 'Aviso:',
                            detail: 'Categoria deletada com sucesso!'
                        })
                    },
                    onError: (error) => {
                        aviso.current.show({
                            severity: 'error',
                            summary: 'Aviso:',
                            detail: error.message
                        })
                    }
                });
            }
        });
          
    }


    return(
        <>
            <h2 className="flex justify-content-between align-items-center">
                Fornecedores
                <Button 
                    label='Novo fornecedor'
                    icon={'pi pi-plus'}
                    className='bg-blue-500 hover:bg-blue-800 gap-3 border-0'
                    onClick={() => setVisibleCreate(true)}
                />
            </h2>
            <DataTable
                className='mt-4'
                value={fornecedores}
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
                    body={(rowData) => (
                        <div className='flex gap-2'>
                            <Button
                                rounded
                                icon={'pi pi-pencil'}
                                className='bg-blue-500 hover:bg-blue-800 border-0'
                                onClick={() => {
                                    setValueEdit('status', rowData.status)
                                    setValueEdit('telefone', rowData.telefone)
                                    setValueEdit('email', rowData.email)
                                    setValueEdit('cnpj', rowData.cnpj)
                                    setValueEdit('nome', rowData.nome)
                                    setValueEdit('id', rowData.id)
                                    setVisibleEdit(true)}}

                            />
                            <Button
                                rounded
                                icon={'pi pi-trash'}
                                className='bg-blue-500 hover:bg-blue-800 border-0'
                                onClick={() => deletar(rowData.id)}
                            />
                        </div>   
                    )}
                />
                
            </DataTable>
            <Sidebar
                visible={visibleCreate}
                position='right'
                onHide={() => setVisibleCreate(false)}
            >
                <form onSubmit={handleSubmit(criar)}>
                    <h3>Criar</h3>
                    <label htmlFor="fonecedor_nome" className='mb-2 block'>Fornecedor</label>
                    <InputText 
                        id='fornecedor_nome'
                        placeholder='Digite o nome'
                        className='w-full mb-3'
                        {...register('nome')}
                    />
                    <InputText 
                        id='fornecedor_cnpj'
                        placeholder='Digite o CNPJ'
                        className='w-full mb-3'
                        {...register('cnpj')}
                    />
                    <InputText 
                        id='fornecedor_email'
                        placeholder='Digite o e-mail'
                        className='w-full mb-3'
                        {...register('email')}
                    />
                    <InputMask
                        id="fornecedor_telefone"
                        placeholder="(99) 99999-9999"
                        className='w-full mb-3'
                        mask="(99) 99999-9999"
                        {...register('telefone', { required: true })}
                        onChange={(e) => setValue('telefone', e.target.value)}
                    />
                    <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                            <Dropdown 
                                {...field}
                                options={status.map(opcao => ({label: opcao, value: opcao}))} 
                                optionLabel="label"
                                placeholder="Selecione a opção"
                                className="w-full mb-3 md:w-14rem"
                            />
                        )}
                    />
                    <input type="hidden" {...register("status")} />
                    <Button 
                        type='submit'
                        label='criar'
                        className='bg-blue-500 hover:bg-blue-800 w-full border-0'
                    />
                </form>
                
            </Sidebar>
            <Sidebar
                visible={visibleEdit}
                position='right'
                onHide={() => setVisibleEdit(false)}
            >
                <form onSubmit={handleSubmitEdit(editar)}>
                    <h3>Editar</h3>
                    <input
                        type='hidden'
                        {...registerEdit('id')}
                    />
                    <label htmlFor="fonecedor_nome" className='mb-2 block'>Fornecedor</label>
                    <InputText 
                        id='fornecedor_nome'
                        placeholder='Digite o nome'
                        className='w-full mb-3'
                        {...registerEdit('nome')}
                    />
                    <InputText 
                        id='fornecedor_cnpj'
                        placeholder='Digite o CNPJ'
                        className='w-full mb-3'
                        {...registerEdit('cnpj')}
                    />
                    <InputText 
                        id='fornecedor_email'
                        placeholder='Digite o e-mail'
                        className='w-full mb-3'
                        {...registerEdit('email')}
                    />
                    <Controller
                        name="telefone" // Nome do campo para o Controller
                        control={controlEdit}
                        render={({ field }) => (
                            <InputMask 
                                {...field} // Passe todas as props do field para o InputMask
                                id="fornecedor_telefone"
                                placeholder="(99) 99999-9999"
                                className='w-full mb-3'
                                mask="(99) 99999-9999"
                            />
                        )}
                    />
                    <input type="hidden" {...registerEdit("telefone")} />                    
                    <Controller
                        name="status"
                        control={controlEdit}
                        render={({ field }) => (
                            <Dropdown 
                                {...field}
                                options={status.map(opcao => ({label: opcao, value: opcao}))} 
                                optionLabel="label"
                                placeholder="Selecione a opção"
                                className="w-full mb-3 md:w-14rem"
                            />
                        )}
                    />
                    <input type="hidden" {...registerEdit("status")} />
                    <Button 
                        type='submit'
                        label='editar'
                        className='bg-blue-500 hover:bg-blue-800 w-full border-0'
                    />
                </form>
            </Sidebar>
            <ConfirmDialog />
            <Toast ref={aviso} position='bottom-right' />
        </>
    );
}

export default Fornecedores;