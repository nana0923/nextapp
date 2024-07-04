"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <ul>
      <li className="create">
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li className="update">
            <Link href={"/update/" + id}>Update</Link>
          </li>
          <li className="delete">
            <input
              type="button"
              value="Delete"
              onClick={() => {
                if (confirm("삭제하시겠습니까?")) {
                  const options = { method: "DELETE" };
                  fetch(
                    process.env.NEXT_PUBLIC_API_URL + "topics/" + id,
                    options
                  )
                    .then((resp) => resp.json)
                    .then((result) => {
                      router.push("/");
                      router.refresh();
                    });
                } else {
                  return false;
                }
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
