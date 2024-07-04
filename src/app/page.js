export default function Home() {
  return (
    <div className="home">
      <h2>안녕하세요😀</h2>
      <img src="/hello.png" />
      <br />
      <p>아래 Create 버튼을 눌러 글을 생성해보세요!</p>
      <br />
      <p>위 글목록을 누르면 해당 글 상세페이지로 이동합니다.</p>
      <br />
      <p>
        글 상세페이지에서 update/delete를 누르면 해당 글을 삭제/수정 할 수
        있습니다.
      </p>
    </div>
  );
}
