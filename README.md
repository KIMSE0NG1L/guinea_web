# 기니 키우기 웹사이트

모바일 게임 「기니 키우기」의 소개 페이지와 개인정보처리방침·이용약관 페이지입니다.
Next.js 정적 내보내기(`output: "export"`)로 만들고 Vercel로 배포합니다.

- 소개: `/`
- 개인정보처리방침: `/privacy-policy/`
- 이용약관: `/terms-of-service/`

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ 에 정적 파일 생성
```

## 배포

Vercel 프로젝트가 이 저장소와 연결되어 있어서 `main`에 푸시하면 자동으로 배포됩니다.

## 내용 수정

- 정책 문서: `src/content/*.md` (게임 저장소의 `docs/*.md`와 같은 내용으로 유지)
- 그림·스프라이트·폰트: 게임 저장소의 에셋을 복사해 `public/game/`, `src/app/fonts/`에 둠
