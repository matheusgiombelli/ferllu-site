import { defineField, defineType } from 'sanity'

export const Wrapper = defineType({
    name: 'wrapper',
    title: 'Wrapper',
    type: 'document',
	fields: [
        defineField({
            name: 'titulo',
            title: 'Título',
            type: 'string',
        }),

        defineField({
            name: 'descricao',
            title: 'Descrição',
            type: 'text'
        }),
        
        defineField({
            name: 'imagem',
            title: 'Imagem',
            type: 'image',
        }),
    ],
})

export const Cuidados = defineType({
    name: 'cuidados',
    title: 'Cuidados',
    type: 'document',
	fields: [
        defineField({
            name: 'titulo',
            title: 'Título',
            type: 'string',
        }),

        defineField({
            name: 'descricao',
            title: 'Descrição',
            type: 'text'
        }),
    ],
})