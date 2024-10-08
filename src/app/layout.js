import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export const metadata = {
  title: "WEB tutorials",
  description: "Generated by nahyeon",
};

export default async function RootLayout({ children }) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "topics", {
    cache: "no-store",
  });
  const topics = await resp.json();
  return (
    <html>
      <body>
        <div className="wrapper">
          <div className="container">
            <header>
              <h1>
                <Link href="/">Home</Link>
              </h1>
              <p>글 목록</p>
              <ol>
                {topics.map((topic) => {
                  return (
                    <li key={topic.id}>
                      <Link href={`/read/${topic.id}`}>{topic.title}</Link>
                    </li>
                  );
                })}
              </ol>
            </header>
            <section>
              <div className="content">{children}</div>
            </section>
            <div className="btnArea">
              <p>페이지 바로가기</p>
              <Control />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
