import { z } from 'zod';

export const ClientSchema = z.object({
    name: z.string().nonempty({ message: 'O nome do cliente é obrigatório.' }),
    phone: z.string().nonempty({ message: 'O telefone do cliente é obrigatório.' }),
    cpf: z.string().nonempty({ message: 'O CPF do cliente é obrigatório.' }),
});

export const AddressSchema = z.object({
    city: z.string().nonempty({ message: 'A cidade é obrigatória.' }),
    street: z.string().nonempty({ message: 'A rua é obrigatória.' }),
    number: z.string().nonempty({ message: 'O número da casa é obrigatório.' }),
    state: z.string().nonempty({ message: 'O estado é obrigatório.' }),
    zip: z.string(),
    district: z.string().nonempty({ message: 'O bairro é obrigatório.' }),
    reference: z.string(),
});

export const ProductSchema = z.object({
    name: z.string().nonempty({ message: "O Nome é Obrigatorio." }),
    description: z.string(),
    modelo: z.string().nonempty({ message: "O modelo é obrigatório." }),
    color: z.string().nonempty({ message: "A cor é obrigatória." }),
    code: z.number()
        .min(1, { message: "Adicione um codigo valido" }),
    price: z
        .number()
        .min(1, { message: "Adicione um preço valido" }),
    totalValue: z.number()
        .min(1, { message: "Adicione um valor valido" }),
});

export const ContractSchema = z.object({
    number: z.number(),
    retirada: z.string(),
    devolucao: z.string(),
    observacao: z.string(),
    tipo: z.string(),
    status: z.string(),
    client: ClientSchema,
    products: z.array(ProductSchema),
});

export const validateContract = (data: any) => {
    try {
        const contractData = ContractSchema.parse(data)
        return { success: true, data: contractData }
    } catch (error) {
        return { success: false, data: error }
    }
}


export const validateClientData = (data: any) => {
    try {
        const clientData = ClientSchema.parse(data);
        return { success: true, data: clientData };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};

export const validateAddressData = (data: any) => {
    try {
        const addressData = AddressSchema.parse(data);
        return { success: true, data: addressData };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};

export const ValidateProductData = (data: any) => {
    try {
        const productData = ProductSchema.parse(data);
        return { success: true, data: productData };
    } catch (error: any) {
        return { success: false, error: JSON.parse(error.message) };
    }
}
