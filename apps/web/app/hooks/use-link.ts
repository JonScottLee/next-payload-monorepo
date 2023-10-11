import { ILink, type Page } from "@org/cms";

type UseLinkReturn = {
    href: string
    label: string
}

export const useLink = (link: ILink): UseLinkReturn => {
    const isCustomUrl = link.type === 'custom'

    const href = isCustomUrl
        ? link.url
        : (link.reference.value as Page).slug || '/'

    return {
        href,
        label: link.label,
    }
}