export default function Button({ campaign }) {
  return (
    <li className="li-campaign">
      <a className="link-campaign" href={campaign.url}>
        <h1>{campaign.value}</h1>
      </a>
    </li>
  );
}
