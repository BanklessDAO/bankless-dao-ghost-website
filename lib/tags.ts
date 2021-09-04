import { Tag } from '@tryghost/content-api';
import api from './ghost-api';


export async function getAllTags(): Promise<Tag> {
	let results: Tag[];
	try {

		results = await api.tags.browse({
			include: ["count.posts"],
			order: ["count.posts ASC"]
		});

		if (!results) return null;

	} catch(error: any) {
		if(error.response?.status !== 404) throw new Error(error);

		return null;
	}

	return results;
}


export async function getTagBySlug(tagSlug: string): Promise<Tag> {

	let result: Tag = null;

	try {

		result = await api.tags.read({
			slug: tagSlug,
		}, {
			include: ["count.posts"]
		});

		if(!result) return null;

	} catch(error: any) {

		if(error.response?.status !== 404) throw new Error(error);
		return null;

	}

	return result;

}