import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'splo0dmf',
    dataset: 'production',
    useCdn:true
})
const builder = imageUrlBuilder(client)

export const urlgen = (source)=> builder.image(source)
export default client