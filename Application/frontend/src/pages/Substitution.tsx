import React from "react";
import { useLocation } from "react-router-dom";

const Substitution = () => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  interface Query {
    profileType?: string | null;
    g: number | null;
    u: number | null;
    a: number | null;
    i: number | null;
    s: number | null;
    z: number | null;
    yc: number | null;
    iy: number | null;
    iz: number | null;
    sy: number | null;
    sz: number | null;
    zy: number | null;
    zz: number | null;
    zc: number | null;
  }

  const query = useQuery();

  const substitutedElement: Query = {
    profileType: query.get("profileType"),
    g: +query.get("g")!,
    u: +query.get("u")!,
    a: +query.get("a")!,
    i: +query.get("i")!,
    s: +query.get("s")!,
    z: +query.get("z")!,
    yc: +query.get("yc")!,
    iy: +query.get("iy")!,
    iz: +query.get("iz")!,
    sy: +query.get("sy")!,
    sz: +query.get("sz")!,
    zy: +query.get("zy")!,
    zz: +query.get("zz")!,
    zc: +query.get("zc")!,
  };

  return (
    <React.Fragment>
      <h1>Substitution Works!</h1>
      <p>profileType: {substitutedElement.profileType && substitutedElement.profileType}</p>
      <p>g: {substitutedElement.g && substitutedElement.g}</p>
      <p>u: {substitutedElement.u && substitutedElement.u}</p>
      <p>a: {substitutedElement.a && substitutedElement.a}</p>
      <p>i: {substitutedElement.i && substitutedElement.i}</p>
      <p>s: {substitutedElement.s && substitutedElement.s}</p>
      <p>z: {substitutedElement.z && substitutedElement.z}</p>
      <p>yc: {substitutedElement.yc && substitutedElement.yc}</p>
      <p>iy: {substitutedElement.iy && substitutedElement.iy}</p>
      <p>iz: {substitutedElement.iz && substitutedElement.iz}</p>
      <p>sy: {substitutedElement.sy && substitutedElement.sy}</p>
      <p>sz: {substitutedElement.sz && substitutedElement.sz}</p>
      <p>zy: {substitutedElement.zy && substitutedElement.zy}</p>
      <p>zz: {substitutedElement.zz && substitutedElement.zz}</p>
      <p>zc: {substitutedElement.zc && substitutedElement.zc}</p>
    </React.Fragment>
  );
};

export default Substitution;
