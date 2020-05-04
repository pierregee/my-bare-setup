import * as React from "react";
import useMe from "../../api/queries/me";

const MeView = () => {
  const { data } = useMe();
  return <div>{data?.me?.email}</div>;
};

export default MeView;
