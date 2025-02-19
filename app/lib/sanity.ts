import imageUrlBuilder from '@sanity/image-url'
import { Any, createClient } from 'next-sanity'

export const client = createClient({
	projectId: 'kwxy3pa7',
	dataset: 'production',
	apiVersion: '2025-01-27',
	useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: Any) {
	return builder.image(source)
}
