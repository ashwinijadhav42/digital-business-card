import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadCardPDF = async (element, fileName = "card") => {
  if (!element) {
    alert("Card not loaded yet");
    return;
  }

  const originalWidth = element.style.width;

  // fixed width for consistent PDF
  element.style.width = "460px";

  const canvas = await html2canvas(element, {
    scale: 3,
    useCORS: true,
    backgroundColor: null
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = canvas.width;
  const imgHeight = canvas.height;

  const topMargin = 20;
  const bottomMargin = 20;

  const usableHeight = pageHeight - topMargin - bottomMargin;

  const ratio = Math.min(pageWidth / imgWidth, usableHeight / imgHeight);

  const finalWidth = imgWidth * ratio;
  const finalHeight = imgHeight * ratio;

  const x = (pageWidth - finalWidth) / 2;
  const y = topMargin + (usableHeight - finalHeight) / 2;

  pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);

  pdf.save(`${fileName}.pdf`);

  element.style.width = originalWidth;
};