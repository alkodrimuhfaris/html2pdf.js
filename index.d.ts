declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | [number, number, number, number];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: { scale?: number, dpi?: number };
    jsPDF?: { unit: string; format: string; orientation: string };
  }

  function set(options: Html2PdfOptions): any;

  export default function html2pdf(
    element?: HTMLElement | string,
    options?: Html2PdfOptions
  ): ({set: typeof set});
}