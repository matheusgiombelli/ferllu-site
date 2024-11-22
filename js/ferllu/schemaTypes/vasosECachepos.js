// Importação correta do Sanity
import { defineField, defineType } from 'sanity'

export const VasosECachepos = defineType({
	name: 'VasosECachepos',
	title: 'VasosECachepos',
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

	defineField({
		title: 'URL',
		name: 'url',
		type: 'url'
	}),
	
	defineField({
		title: 'Foto',
		name: 'foto',
		type: 'image',
	}),
	],
})

