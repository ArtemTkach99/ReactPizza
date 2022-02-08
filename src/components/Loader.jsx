import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={325}
    height={420}
    viewBox="0 0 220 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="213" y="78" rx="0" ry="0" width="0" height="1" />
    <circle cx="107" cy="102" r="100" />
    <rect x="23" y="216" rx="0" ry="0" width="163" height="21" />
    <rect x="7" y="249" rx="0" ry="0" width="198" height="47" />
    <rect x="8" y="315" rx="0" ry="0" width="198" height="27" />
  </ContentLoader>
);

export default MyLoader;
