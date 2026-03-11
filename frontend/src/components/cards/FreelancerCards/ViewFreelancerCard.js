
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import FreelancerTemplate1 from "./Freelancer";
import FreelancerTemplate2 from "./FreelanceSoftwareEngineer";

import { downloadCardPDF } from "../../../utils/downloadPDF";

function ViewFreelancerCard() {
  const cardRef = useRef();
  const { slug } = useParams();
  const [card, setCard] = useState(null);

  // ================= PDF DOWNLOAD =================
const handleDownloadPDF = () => {
  downloadCardPDF(cardRef.current, slug);
};

// ================= FETCH CARD =================
  useEffect(() => {
    fetch(`http://localhost:8080/api/freelancer-cards/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Private");
        return res.json();
      })
      .then((data) => setCard(data))
      .catch(() => setCard("PRIVATE"));
  }, [slug]);

  if (card === "PRIVATE")
    return <h3 className="text-center mt-5">This Card is Private</h3>;

  if (!card) return <h4 className="text-center mt-5">Loading...</h4>;

  const publicUrl =
    `${window.location.origin}/view-freelancer-card/${slug}`;

  return (
    <div className="text-center">

  {/* CARD */}
  <div className="d-flex justify-content-center mt-5">
    <div ref={cardRef} id="card-to-download">
      {card.templateType === "template1" && (
        <FreelancerTemplate1 data={card} 
        showAllIcons={false}
         onDownload={handleDownloadPDF}
          cardRef={cardRef} 
    slug={slug}
    publicUrl={publicUrl}
    />
      )}

      {card.templateType === "template2" && (
  <FreelancerTemplate2
    data={card}
    showAllIcons={false}
    onDownload={handleDownloadPDF}
    cardRef={cardRef}
    slug={slug}
    publicUrl={publicUrl}
  />
)}
    </div>
  </div>
  
    </div> 
  );
}

export default ViewFreelancerCard;