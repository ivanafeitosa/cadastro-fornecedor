import { useQuery, useMutation } from "@tanstack/react-query";
import { API, queryClient } from "../services";


export const useBuscarFornecedores = () => {
    return useQuery({
        queryKey: ['buscar-fornecedores'],
        queryFn: async () => {
            const request = await API.get('fornecedores');
            return request.data;
        }
    });
}

export const useCriarFornecedor = () => {
    return useMutation({
        mutationFn: async (data) => {
            const request = await API.post('fornecedores', data);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['buscar-fornecedores']
            });
        }
    });
}

export const useEditarFornecedor = () => {
    return useMutation({
        mutationFn: async (data) => {
            const request = await API.put(`fornecedores/${data.id}`, data);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['buscar-fornecedores']
            });
        }
    });
}

export const useDeletarFornecedor = () => {
    return useMutation({
        mutationFn: async (id) => {
            const request = await API.delete(`fornecedores/${id}`);
            return request.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['buscar-fornecedores']
            });
        }
    });
}