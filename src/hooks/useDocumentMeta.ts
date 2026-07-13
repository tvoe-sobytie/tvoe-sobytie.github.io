import { useEffect } from 'react';

export default function useDocumentMeta(title: string, description: string) {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title;

        let metaDescription = document.querySelector('meta[name="description"]');
        const prevDescription = metaDescription?.getAttribute('content') ?? '';
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        return () => {
            document.title = prevTitle;
            if (metaDescription) {
                metaDescription.setAttribute('content', prevDescription);
            }
        };
    }, [title, description]);
}
