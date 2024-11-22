import { defineField, defineType } from 'sanity'

export const ItensJardinagem = defineType({
    name: 'ItensJardinagem',
    title: 'Itens de Jardinagem',
    type: 'document',
    fields: [
    defineField({
        name: 'nome',
        title: 'Nome do Item',
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