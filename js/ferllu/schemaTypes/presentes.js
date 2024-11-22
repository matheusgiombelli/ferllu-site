import { defineField, defineType } from 'sanity'

export const Presentes = defineType({
    name: 'Presentes',
    title: 'Presentes',
    type: 'document',
    fields: [
    defineField({
        name: 'nome',
        title: 'Nome do Presente',
        type: 'string',
    }),

    defineField({
		title: 'Descrição',
		name: 'descricao',
		type: 'text'
	}),

    defineField({
        name: 'imagem',
        title: 'Imagem',
        type: 'image',
    }),

    defineField({
		name: 'url',
		title: 'URL',
		type: 'url'
	}),
    ],
})