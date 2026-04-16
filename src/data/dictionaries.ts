import { ContentDictionary } from "./content.types";

const dictionaries = {
    th: () => import('./content-th').then(module => module),
    en: () => import('./content-en').then(module => module),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale): Promise<ContentDictionary> => {
    // Cast to ContentDictionary to ensure it matches the required structure
    const dict = await dictionaries[locale]();
    return dict as unknown as ContentDictionary;
};
