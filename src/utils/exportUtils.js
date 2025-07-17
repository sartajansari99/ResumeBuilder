
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ExportButton = () => {
 
  const handleExportPDF = async () => {
    const input = document.getElementById("resume-preview");

    try {
      const clone = input.cloneNode(true);
      clone.style.width = "210mm";
      clone.style.padding = "20mm";
      clone.style.boxSizing = "border-box";
      clone.style.background = "white";
      clone.style.color = "black";
      document.body.appendChild(clone);

      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#FFFFFF",
      });

      document.body.removeChild(clone);

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleExportPDF}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Export PDF
      </button>
      <div className="hidden">
      
      </div>
    </div>
  );
};

export default ExportButton;
