import { defineField, defineType } from 'sanity'

export const Produtos = defineType({
	name: 'Produtos',
	title: 'Produtos',
	type: 'document',
	fields: [
	defineField({
		title: 'Título',
		name: 'tipo',
		type: 'string',
	}),

	defineField({
		name: 'Foto',
		title: 'Foto',
		type: 'image',
	}),

	defineField({
		name: 'url',
		title: 'URL',
		type: 'url'
	}),
  ],
})
