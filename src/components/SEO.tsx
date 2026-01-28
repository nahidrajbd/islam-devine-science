import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
    title: string;
    description: string;
    image?: string;
}

const SEO = ({ title, description, image = "/thumb.jpg" }: SEOProps) => {
    const location = useLocation();

    useEffect(() => {
        // Update Title
        document.title = title;

        // Update Meta Description
        const updateMeta = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute("name", name);
                document.head.appendChild(meta);
            }
            meta.setAttribute("content", content);
        };

        const updateOgMeta = (property: string, content: string) => {
            let meta = document.querySelector(`meta[property="${property}"]`);
            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute("property", property);
                document.head.appendChild(meta);
            }
            meta.setAttribute("content", content);
        };

        updateMeta("description", description);
        updateOgMeta("og:title", title);
        updateOgMeta("og:description", description);
        updateOgMeta("og:image", image);
        updateMeta("twitter:title", title);
        updateMeta("twitter:description", description);
        updateMeta("twitter:image", image);

    }, [title, description, image, location.pathname]);

    return null;
};

export default SEO;
