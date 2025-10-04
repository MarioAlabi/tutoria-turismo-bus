export default function RouteCard({ route, placeNameList = '' }) {
  return (
    <li className="route">
      <h3>{route.name}</h3>
      <p><strong>Código:</strong> {route.id}</p>
      {route.notes && <p className="muted">{route.notes}</p>}
      {route.covers?.length > 0 && (
        <p><strong>Lugares que cubre:</strong> {placeNameList}</p>
      )}
    </li>
  );
}
