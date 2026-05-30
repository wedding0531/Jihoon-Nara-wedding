/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "지훈",
    nameEn: "Groom",
    father: "장병도",
    mother: "민서영",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "나라",
    nameEn: "Bride",
    father: "이희삼",
    mother: "김명애",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-05",
    time: "11:00",
    venue: "수원 WI 컨벤션",
    hall: "W 홀",
    address: "경기도 수원시 팔달구 월드컵로 310",
    tel: "무료 주차 2시간",
    mapLinks: {
      kakao: "https://kko.to/O54BPZpmzW",
      naver: "https://naver.me/GI3JJPcU"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로에게 가장 든든한 동반자가 되어\n평생을 함께 걷기로 약속했습니다.\n\n소중한 날, 자리해주셔서\n따뜻한 응원으로 함께해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "행복",
    content: "　　　　　　　　　나태주\n\n저녁 때\n돌아갈 집이 있다는 것.\n\n힘들 때\n마음속으로 생각할 사람 있다는 것.\n\n외로울 때\n혼자서 부를 노래 있다는 것."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "장지훈", bank: "신한은행", number: "110-372-070166" },
      { role: "아버지", name: "장병도", bank: "국민은행", number: "659401-01-400611" },
      { role: "어머니", name: "민서영", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이나라", bank: "새마을금고", number: "9003-2607-8649-2" },
      { role: "아버지", name: "이희삼", bank: "농협은행", number: "125-01-080811" },
      { role: "어머니", name: "김명애", bank: "농협은행", number: "125-02-005566" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "지훈♥나라 결혼합니다.",
    description: "2026년 12월 5일, 소중한 분들을 초대합니다."
  }
};
