export interface FAQItem {
    q: string;
    a: string;
}

export interface Service {
    title: string;
    image: string;
    description: string;
    masInfo: string;
    faq: FAQItem[];
}