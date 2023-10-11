import { getCurrentPath } from "@/utils";
import { ILink } from "@org/cms";
import { useLink } from "@hooks/use-link"

export const useCurrentPage = (link: ILink): boolean => {
    const currentPath = getCurrentPath()
    const { href } = useLink(link);

    const sanitizedHref = href === '/' ? 'home' : href

    return sanitizedHref === currentPath
}