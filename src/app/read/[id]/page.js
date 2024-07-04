export default async function Read(props) {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
    {
      cache: "no-store",
    }
  );
  const topic = await resp.json();
  return (
    <div className="read">
      <p>글 상세</p>
      <div className="contArea">
        <h2>{topic.title}</h2>
        {topic.body}
      </div>
    </div>
  );
}
