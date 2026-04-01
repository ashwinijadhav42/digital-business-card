import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import SampleCard from "./SampleCard";

import { downloadCardPDF } from "../../../utils/downloadPDF";

function ViewSampleCard() {

  const cardRef = useRef();
  const { slug } = useParams();
  const [card, setCard] = useState(null);

  // ================= PDF DOWNLOAD =================
  const handleDownloadPDF = () => {
    downloadCardPDF(cardRef.current, slug);
  };

  useEffect(() => {

    fetch(`http://localhost:8080/api/sample-cards/public/${slug}`)
      .then((res) => {

        if (!res.ok) throw new Error("Private");

        return res.json();
      })
      .then((data) => setCard(data))
      .catch(() => setCard("PRIVATE"));

  }, [slug]);

  if (card === "PRIVATE")
    return <h3 className="text-center mt-5">This Card is Private</h3>;

  if (!card) return <h4>Loading...</h4>;

  const publicUrl =
    `${window.location.origin}/view-sample-card/${slug}`;

  return (

    <div className="text-center">

      <div className="d-flex justify-content-center mt-5">

        {/* Card Section */}
        <div className="pdf-wrapper">
        <div ref={cardRef} id="card-to-download">

          <SampleCard
            data={card}
            showAllIcons={true}
            
            onDownload={handleDownloadPDF}
            cardRef={cardRef}
            slug={slug}
            publicUrl={publicUrl}
          />

        </div>
</div>
      </div>

    </div>

  );
}

export default ViewSampleCard;