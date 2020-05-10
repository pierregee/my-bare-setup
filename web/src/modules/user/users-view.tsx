import * as React from "react";
import useUsers from "../../api/queries/users";

const MeView = () => {
  const { data, error } = useUsers({ fetchPolicy: "network-only" });

  if (error) {
    return <div>{error?.message}</div>;
  }

  return (
    <div>
      {data?.users.map((user) => (
        <div>{user.email}</div>
      ))}
    </div>
  );
};
export default MeView;
