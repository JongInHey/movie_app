import { Helmet } from "react-helmet-async";

export const TopTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title>MovieApp | {titleName}</title>
    </Helmet>
  );
};
