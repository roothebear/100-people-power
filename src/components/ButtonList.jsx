import Button from "./Button";

export default function ButtonList({ campaigns }) {
  const buttonList = campaigns.map((campaign) => {
    return <Button campaign={campaign} key={campaign.key} />;
  });

  return <ul className="button-list">{buttonList}</ul>;
}
