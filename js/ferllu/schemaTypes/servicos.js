import { defineField, defineType } from 'sanity'

export const Servicos = defineType({
    name: 'Servicos',
    title: 'Serviços',
    type: 'document',
    fields: [
        defineField({
            title: 'Título',
            name: 'titulo',
            type: 'string',
        }),
        defineField({
            title: 'Descrição',
            name: 'descricao',
            type: 'text'
        }),
    ],
})