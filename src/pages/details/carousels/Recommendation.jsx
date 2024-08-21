import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  const hasRecommendation = data?.results && data.results.length > 0;

  return (
    <>
      {hasRecommendation && (
        <Carousel
          title="Recommendations"
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
        />
      )}
      <div style={{ height: 50 }}></div>
    </>
  );
};

export default Recommendation;
