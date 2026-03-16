import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

import DoctorCard1 from "./DoctorCard1";
import DoctorCard2 from "./DoctorCard2";
import { downloadCardPDF } from "../../../utils/downloadPDF";




function ViewDoctorCard() {
const cardRef = useRef();
  const { slug } = useParams();
  const [card, setCard] = useState(null);

// ================= PDF DOWNLOAD =================
const handleDownloadPDF = () => {
  downloadCardPDF(cardRef.current, slug);
}; 

 useEffect(() => {
    fetch(`http://localhost:8080/api/doctor-cards/public/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error("Private");
        return res.json();
      })
      .then(data => setCard(data))
      .catch(() => setCard("PRIVATE"));
  }, [slug]);

  if (card === "PRIVATE")
    return <h3 className="text-center mt-5">This Card is Private</h3>;

  if (!card) return <h4>Loading...</h4>;

  //  Public URL for QR
  const publicUrl = `${window.location.origin}/view-doctor-card/${slug}`;

  return (
  <div className="text-center">

    {/*  Wrap only card design inside this div */}
    <div ref={cardRef} id="card-to-download">
      {card.templateType === "template1" && <DoctorCard1 data={card} 
      showAllIcons={false}
         onDownload={handleDownloadPDF}
          cardRef={cardRef} 
    slug={slug}
    publicUrl={publicUrl}
  
     />}
      {card.templateType === "template2" && <DoctorCard2 data={card}
       showAllIcons={false}
         onDownload={handleDownloadPDF}
          cardRef={cardRef} 
    slug={slug}
    publicUrl={publicUrl}
     />}
    </div>

   {/* <div ref={cardRef} id="card-to-download">
  {card.templateType?.includes("1") && <DoctorCard1 data={card} />}
  {card.templateType?.includes("2") && <DoctorCard2 data={card} />}
</div> */}


    
  </div>
);
}

export default ViewDoctorCard;
