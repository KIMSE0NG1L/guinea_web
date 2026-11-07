import { Sprite } from "@/components/Sprite";
import { asset } from "@/lib/asset";

const FEATURES = [
  {
    icon: "icon-trophy.png",
    title: "알아서 싸우는 자동 전투",
    body: "기니가 혼자서도 척척 사냥해요. 자리를 비운 동안 번 골드와 재료는 돌아오면 한꺼번에 챙겨 드려요.",
  },
  {
    icon: "icon-map.png",
    title: "39개 지역 맛집 여행",
    body: "뒷산과 버섯 늪에서 시작해 벚꽃 해변, 바닷속 용궁, 기니 대도시를 지나 무너진 성채까지. 지역마다 다른 몬스터와 재료가 기다려요.",
  },
  {
    icon: "icon-codex-book.png",
    title: "요리책 《세상의 모든 맛》",
    body: "모은 재료로 레시피를 하나씩 완성해요. 요리를 먹으면 기니가 잠시 더 강해져요.",
  },
  {
    icon: "icon-chest.png",
    title: "중간보스와 지역 보스",
    body: "지역마다 화난 중간보스 셋과 보스가 버티고 있어요. 아주 가끔은 번쩍이는 황금 중간보스가 나타나기도 해요.",
  },
] as const;

const COMPANIONS = [
  { file: "guinea-idle-strip.webp", frames: 5, name: "모험기니", line: "건초에 지쳐 새로운 끼니를 찾아 떠난 주인공" },
  { file: "guinea-explorer-hamster-idle-strip.webp", frames: 4, name: "탐험기니", line: "전설의 당근을 찾아 헤매는 호기심 대장" },
  { file: "guinea-teto-idle-strip.webp", frames: 4, name: "테토기니", line: "선글라스가 멋진 헬창. 어두워서 가끔 헛스윙" },
  { file: "guinea-assassin-idle-strip.png", frames: 4, name: "암살기니", line: "두건 속에 단검을 숨긴 그림자 속 자객" },
  { file: "guinea-samurai-idle-strip.webp", frames: 4, name: "사무라이기니", line: "벚꽃 해변을 떠도는 과묵한 떠돌이 무사" },
  { file: "guinea-chef-idle-strip.webp", frames: 4, name: "셰프기니", line: "빵집 골목 주방에서 반죽하던 요리사" },
  { file: "witch-gini-idle-strip.png", frames: 4, name: "마녀기니", line: "수면 물약 소동을 일으킨 장본인" },
] as const;

const BOSSES = [
  { file: "boss-slime-idle-strip.webp", name: "왕 슬라임" },
  { file: "boss-mushroom-idle-strip.webp", name: "버섯 대왕" },
  { file: "boss-potato-idle-strip.webp", name: "싹난감자" },
  { file: "boss-kingcrab-idle-strip.webp", name: "킹크랩" },
  { file: "boss-nine-tailed-fox-idle-strip.webp", name: "구미호" },
  { file: "boss-dragon-king-idle-strip.webp", name: "용왕" },
] as const;

export default function Home() {
  return (
    <>
      <section className="hero">
        <picture className="hero__art">
          <source srcSet={asset("hero-night.jpg")} media="(prefers-color-scheme: dark)" />
          <img src={asset("hero-day.jpg")} alt="망토를 두르고 나무 칼을 든 기니가 바다와 성이 보이는 언덕에 서 있는 모습" />
        </picture>
        <div className="hero__shade" aria-hidden />
        <div className="hero__content">
          <h1 className="title-text hero__title">
            <span className="hero__sparkle hero__sparkle--left" aria-hidden>✦</span>
            기니 키우기
            <span className="hero__sparkle hero__sparkle--right" aria-hidden>✧</span>
          </h1>
          <p className="hero__tagline outline-text">건초만 먹던 기니피그, 세상의 모든 맛을 찾아 떠나다!</p>
          <div className="hero__badges">
            <span className="store-badge">Google Play · 출시 준비 중</span>
            <span className="store-badge">App Store · 출시 준비 중</span>
          </div>
          <p className="hero__soon outline-text">곧 만나요!</p>
        </div>
      </section>

      <section id="story" className="section">
        <div className="panel story">
          <div className="story__sprite">
            <Sprite file="guinea-win-strip.webp" frames={5} size={150} fps={5} label="신나서 폴짝 뛰는 기니" />
          </div>
          <div>
            <p className="eyebrow">기니의 이야기</p>
            <h2 className="section-title">황금 당근 도난 사건</h2>
            <p>
              뒷산 아래 시골 마을에서 할머니와 살며 매일 건초만 먹던 기니. 할머니가 평생 한 번 날까 말까 한 <strong>황금 당근</strong>을
              건네준 그날, 한 입 베어 물기 직전에 좀도둑 쥐가 당근을 낚아채 달아나요.
            </p>
            <p>
              쥐를 쫓아 숲과 늪과 동굴을 지나 당근을 되찾은 기니는, 그 옆에서 낡은 요리책 《세상의 모든 맛》을 발견해요. 책에 적힌 요리를
              전부 직접 만들어 먹어 보겠다는 결심 하나로, 기니의 맛집 원정이 시작돼요.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title section-title--center">이런 게임이에요</h2>
        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="panel feature">
              <img src={asset(feature.icon)} alt="" width={64} height={64} className="feature__icon" />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="companions" className="section">
        <h2 className="section-title section-title--center">함께 여행하는 동료들</h2>
        <p className="section-lead">여행길에서 만난 동료가 기니 대신 싸워 줘요. 동료마다 특별한 능력이 하나씩 있어요.</p>
        <div className="companion-grid">
          {COMPANIONS.map((companion) => (
            <article key={companion.name} className="companion">
              <div className="companion__stage">
                <Sprite file={companion.file} frames={companion.frames} size={112} />
              </div>
              <h3 className="companion__name">{companion.name}</h3>
              <p className="companion__line">{companion.line}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="bosses" className="boss-band">
        <div className="section">
          <h2 className="section-title section-title--center boss-band__title">길을 막는 보스들</h2>
          <div className="boss-row">
            {BOSSES.map((boss) => (
              <figure key={boss.name} className="boss">
                <Sprite file={boss.file} frames={4} size={128} fps={5} flip />
                <figcaption>{boss.name}</figcaption>
              </figure>
            ))}
          </div>
          <p className="boss-band__note">…그리고 더 많은 보스가 기니를 기다리고 있어요.</p>
        </div>
      </section>

      <section className="section cta">
        <div className="panel cta__panel">
          <Sprite file="guinea-idle-strip.webp" frames={5} size={110} />
          <div>
            <h2 className="section-title">출시 준비 중이에요</h2>
            <p>Google Play와 App Store에 곧 찾아갈게요. 궁금한 점은 언제든 메일로 보내 주세요.</p>
            <a className="game-button" href="mailto:kimsungil322@gmail.com">문의 메일 보내기</a>
          </div>
        </div>
      </section>
    </>
  );
}
