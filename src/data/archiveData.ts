export interface GameItem {
  id: string;
  index: string;
  name: string;
  englishName: string;
  year: string;
  platform: string;
  reels: string;
  paylines: string;
  signatureFeature: string;
  bonusMechanism: string;
  psychologicalGimmick: string;
  mathematicalReality: string;
  symbolList: string[];
  historicalContext: string;
  accentQuote: string;
}

export interface GlossaryItem {
  index: string;
  term: string;
  englishTerm: string;
  category: string;
  shortDesc: string;
  deepDive: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const ARCHIVE_GAMES: GameItem[] = [
  {
    id: 'sea-story',
    index: '01',
    name: '바다이야기',
    englishName: 'Sea Story',
    year: '2004 — 2006',
    platform: '비디오 릴 아케이드 (Screen-based Video Reel)',
    reels: '5릴 (5-Reels)',
    paylines: '9 페이라인 (9-Paylines)',
    signatureFeature: '암전 후 거대 황금 고래(Whale) 유영 및 체리 예고 연출',
    bonusMechanism: '누적 적립형 연쇄 당첨(연타) 기믹과 20단계 컷인 시퀀스',
    psychologicalGimmick: '화면 전체가 어두워지는 순간 청각적 긴장감을 극대화하여 도파민 방출 유도',
    mathematicalReality: '고래의 출현은 확률 변동이 아닌, 이미 서버 보드 RNG에서 계산된 당첨 결과를 시각화하는 지연 재생 비디오 클립에 불과함.',
    symbolList: ['황금 고래', '백상아리', '해파리', '바다거북', '체리', '조개'],
    historicalContext: '2000년대 중반 전국 수천 개 성인 게임장에 보급되어 엄청난 사회적 파장을 일으켰으며, 2006년 사태 이후 사행산업통합감독위원회 출범과 게임산업진흥에 관한 법률 전면 개정의 결정적 도화선이 되었습니다.',
    accentQuote: '고래가 화면을 가르는 3초, 그 3초는 확률의 시작이 아니라 이미 끝난 수학의 상영회였습니다.'
  },
  {
    id: 'yamato',
    index: '02',
    name: '야마토',
    englishName: 'Yamato',
    year: '2003 — 2005',
    platform: '하이브리드 비디오 아케이드 (SF Space Odyssey)',
    reels: '3릴 / 5릴 변형',
    paylines: '8 — 25 가변 라인',
    signatureFeature: '파동포(Wave Cannon) 발사 카운트다운, 함장 컷인, 붉은 행성 비행',
    bonusMechanism: '단계별 리치(Reach) 연출 및 게이지 충전형 연속 찬스',
    psychologicalGimmick: '실패 직전 파동포가 충전되는 연출을 통해 "거의 맞출 뻔했다"는 니어 미스(Near-miss) 착각을 강력히 강화',
    mathematicalReality: '카운트다운 게이지는 독립 시행 난수와 무관하며, 플레이어가 투입을 지속하도록 설계된 심리적 시각 장치입니다.',
    symbolList: ['우주전함', '파동포', '함장 코다이', '외계 전함', '에너지 코어', '777'],
    historicalContext: '일본의 파치슬롯/파칭코에서 발전한 컷인 애니메이션과 스토리텔링 연출을 한국 아케이드 시장에 직수입하여 비디오 릴게임의 연출 경쟁을 촉발시킨 주역입니다.',
    accentQuote: '발사되는 파동포는 적을 격침하기 위한 것이 아니라, 플레이어의 이성을 무장 해제하기 위한 빛이었습니다.'
  },
  {
    id: 'son-goku',
    index: '03',
    name: '손오공',
    englishName: 'Son Goku',
    year: '2005 — 2006',
    platform: '서유기 판타지 비디오 릴',
    reels: '5릴 (5-Reels)',
    paylines: '15 페이라인',
    signatureFeature: '여의봉 회전 및 근두운 돌파 연출, 천계 보너스 배틀',
    bonusMechanism: '스캐터(Scatter) 심볼 3개 이상 정렬 시 발동하는 프리 스핀 모드',
    psychologicalGimmick: '손오공이 요괴와 싸우는 배틀 액션을 통해 플레이어가 게임의 승패를 "조작하고 있다"는 통제 착각(Illusion of Control) 부여',
    mathematicalReality: '배틀의 승패는 애니메이션 렌더링 시작 전에 난수 1개로 이미 종결되었으며, 플레이어의 버튼 연타는 승률에 0.00%의 영향도 주지 못함.',
    symbolList: ['손오공', '여의봉', '근두운', '삼장법사', '저팔계', '황금 복숭아'],
    historicalContext: '동양 고전 서유기 IP의 친숙한 캐릭터와 화려한 3D 그래픽을 전면에 내세워 바다이야기의 독주에 맞선 대형 아케이드 히트작이었습니다.',
    accentQuote: '여의봉을 휘두르는 것은 손오공이었지만, 그 궤적을 지배한 것은 100만 분의 1초짜리 난수였습니다.'
  },
  {
    id: 'golden-castle',
    index: '04',
    name: '황금성',
    englishName: 'Golden Castle',
    year: '2004 — 2006',
    platform: '중세 판타지 기사 비디오 릴',
    reels: '5릴 (5-Reels)',
    paylines: '20 페이라인',
    signatureFeature: '성문 개방 시퀀스, 황금 열쇠 보물 상자 오픈 연출',
    bonusMechanism: '누적 프로그레시브 잭팟(Progressive Jackpot) 및 문 개방 누적 게이지',
    psychologicalGimmick: '성문이 조금씩 열리는 시각적 진행률을 보여줌으로써 "이제 곧 열린다"는 매몰 비용 오류(Sunk Cost Fallacy)를 자극',
    mathematicalReality: '문이 열리는 정도는 과거 누적치와 독립적이며, 매 스핀은 이전 스핀의 문 열림과 완전히 무관한 독립 시행(Independent Trials)입니다.',
    symbolList: ['황금 성곽', '기사 투구', '보물 상자', '황금 열쇠', '성배', '크라운'],
    historicalContext: '중세 유럽 판타지 비주얼과 거대한 황금 성문을 모티프로 하여, 화려한 사운드 트랙과 함께 성인 아케이드 시장의 한 축을 담당했습니다.',
    accentQuote: '열리지 않는 성문은 무거운 철문이 아니라, 독립 시행이라는 수학의 벽이었습니다.'
  },
  {
    id: 'ocean-paradise',
    index: '05',
    name: '오션파라다이스',
    englishName: 'Ocean Paradise',
    year: '2005 — 2006',
    platform: '심해 탐사 비디오 릴',
    reels: '5릴 (5-Reels)',
    paylines: '9 페이라인',
    signatureFeature: '심해 잠수정 잠항, 거대 가오리 및 인어 출현 연출',
    bonusMechanism: '심해 탐사 보너스 라운드 및 해저 보물 연속 지급 기믹',
    psychologicalGimmick: '깊은 바닷속으로 하강하는 수직 카메라 무빙을 통해 플레이어를 깊은 트랜스 상태(Trance State)로 유도',
    mathematicalReality: '바다이야기의 성공 방정식(5릴 9라인, 해양 생물 심볼)을 그대로 벤치마킹하여 스킨만 변경한 구조적 쌍둥이 모델.',
    symbolList: ['잠수함', '거대 가오리', '인어', '진주 조개', '산호초', '나침반'],
    historicalContext: '바다이야기 열풍 속에서 해양 테마의 인기를 증명한 후속 명작으로, 당시 아케이드 시장의 테마 복제와 메커니즘 획일화를 상징적으로 보여줍니다.',
    accentQuote: '바다는 달랐지만 그 심해 아래 깔려 있던 수학적 알고리즘의 공식은 한 치의 오차도 없이 동일했습니다.'
  },
  {
    id: 'aladdin',
    index: '06',
    name: '알라딘',
    englishName: 'Aladdin',
    year: '2003 — 2005',
    platform: '기계식 감성 계승 클래식 비디오 릴',
    reels: '3릴 (3-Reels Classic)',
    paylines: '5 페이라인',
    signatureFeature: '요술 램프 문지르기, 지니(Genie) 소환 및 양탄자 활공 연출',
    bonusMechanism: '클래식 찬스 타임(Chance Time) 및 고배당 777 연속 배열',
    psychologicalGimmick: '3릴의 단순함과 지니의 거대한 등장을 대비시켜 고전 아케이드 팬들의 직관적 향수 자극',
    mathematicalReality: '3개 릴의 심볼 수가 적어 보이지만, 각 릴의 정지점(Stop Points)에 배정된 가중치가 달라 겉보기 확률과 실제 당첨률 사이에 큰 간극 존재.',
    symbolList: ['요술 램프', '거인 지니', '마법 양탄자', '에메랄드', '트리플 세븐', '루비'],
    historicalContext: '90년대 기계식 릴 슬롯에서 2000년대 비디오 릴게임으로 넘어가는 징검다리 역할을 한 타이틀로, 정통 3릴 매니아들에게 깊은 각인을 남겼습니다.',
    accentQuote: '램프에서 깨어난 거인은 소원을 들어주는 지니가 아니라, 확률이라는 엄격한 우주의 법칙이었습니다.'
  }
];

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    index: '01',
    term: 'REEL',
    englishTerm: '릴 (회전 원통체)',
    category: '기계·디스플레이',
    shortDesc: '심볼이 배열된 채 회전하는 원통 또는 디지털 화면상 수직 회전 밴드.',
    deepDive: '초기 릴게임은 물리적 스텝 모터로 회전하는 드럼 릴을 사용했으나, 2000년대 이후 CRT 및 LCD 화면 속에 렌더링되는 소프트웨어 가상 릴로 완전히 전환되었습니다. 물리적 릴은 심볼 수(보통 20~22개)의 한계가 있었으나, 가상 릴은 난수 매핑을 통해 무한대의 가상 정지점을 구현합니다.'
  },
  {
    index: '02',
    term: 'SYMBOL',
    englishTerm: '심볼 (패턴 기호)',
    category: '그래픽 자산',
    shortDesc: '릴 표면에 위치하는 아이콘으로, 조합에 따라 배당과 기능을 결정하는 시각 단위.',
    deepDive: '고전 과일 심볼(체리, 레몬, 멜론, 종, BAR, 7)부터 테마형 상징(고래, 여의봉, 파동포, 황금 열쇠)까지 다양합니다. 각 심볼은 릴에 균등하게 배치되지 않고 특정 심볼에 희소 가중치가 부여되어 출현율이 통제됩니다.'
  },
  {
    index: '03',
    term: 'PAYLINE',
    englishTerm: '페이라인 (당첨 기준선)',
    category: '규칙 메커니즘',
    shortDesc: '동일한 심볼이 일치해야 당첨으로 인정되는 유효 선(가로, 대각선, 지그재그).',
    deepDive: '초기 클래식 릴은 중앙 가로 1선 또는 3~5선이었으나, 5릴 비디오 릴게임에 이르러 9선, 15선, 20선, 25선으로 복잡화되었습니다. 페이라인이 많을수록 소액 당첨 빈도가 높아져 플레이어가 지속적으로 이기고 있다는 인지적 착각(Loss disguised as win)을 일으키기 쉽습니다.'
  },
  {
    index: '04',
    term: 'RNG',
    englishTerm: 'Random Number Generator (난수생성기)',
    category: '수학·알고리즘',
    shortDesc: '레버를 누르는 순간 1/1,000초 단위로 결과를 확정하는 내부 수학 엔진.',
    deepDive: '모든 합법적이고 공학적인 디지털 릴게임의 심장부입니다. 물리적으로 릴이 3~5초간 돌아가는 것은 이미 RNG에 의해 결정된 숫자를 인간의 눈에 드라마틱하게 전달하기 위한 연극적 프레젠테이션에 불과합니다. 회전 도중 버튼을 누르는 손맛은 결과에 개입하지 않습니다.'
  },
  {
    index: '05',
    term: 'RTP',
    englishTerm: 'Return to Player (환급률 / 환수율)',
    category: '수학·확률',
    shortDesc: '장기적으로 투입된 총 금액 중 플레이어에게 배당으로 반환되도록 설계된 이론적 백분율.',
    deepDive: '예컨대 RTP가 92%라면, 수백만 번의 스핀 누적 시 100만 원당 92만 원이 상금으로 돌아가고 8만 원은 하우스 에지(House Edge)로 귀속됩니다. 단기적으로는 분산(Variance)에 의해 큰 승리와 패배가 요동치지만, 스핀 수가 증가할수록 대수의 법칙에 의해 이론적 RTP에 수렴합니다.'
  },
  {
    index: '06',
    term: 'BONUS FEATURE',
    englishTerm: '보너스 피처 / 예고 연출',
    category: '연출 심리학',
    shortDesc: '고액 배당이나 연속 당첨에 앞서 기대감을 증폭시키기 위해 발동하는 특수 시퀀스.',
    deepDive: '바다이야기의 "고래", 야마토의 "파동포 발사 카운트", 손오공의 "여의봉 회전" 등이 이에 해당합니다. 연출은 당첨 확률을 올려주는 원인이 아니라, 난수에 의해 결정된 결과가 고액일 때 시스템이 호출하는 이벤트 트리거(Event Trigger)입니다.'
  },
  {
    index: '07',
    term: 'SCATTER',
    englishTerm: '스캐터 심볼',
    category: '규칙 메커니즘',
    shortDesc: '지정된 페이라인 위에 정렬되지 않고 화면 아무 위치에나 3개 이상 나타나도 유효한 특수 심볼.',
    deepDive: '스캐터는 주로 프리 스핀(Free Spin)이나 미니 게임 보너스 라운드를 해금하는 열쇠 역할을 합니다. 특정 라인에 얽매이지 않기 때문에 릴이 멈출 때마다 긴장감을 가장 강하게 유지시키는 핵심 설계 요소입니다.'
  },
  {
    index: '08',
    term: 'JACKPOT SYSTEM',
    englishTerm: '잭팟 / 연타 누적 체계',
    category: '경제·수학',
    shortDesc: '투입액의 일부를 적립하여 극히 낮은 확률의 최고 조합에 지급하는 누적형 상금 구조.',
    deepDive: '국내 아케이드 릴게임사에서 가장 논란이 되었던 부분은 "연타(연속 당첨)" 시스템이었습니다. 한 번 당첨된 후 다음 회차에도 고배당이 연쇄적으로 터지는 것처럼 보이는 메커니즘은 플레이어의 즉각적인 이탈을 방지하고 과몰입을 야기하는 강력한 촉매로 작용했습니다.'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: '역사 & 기원',
    question: '릴게임이란 정확히 어떤 게임 방식을 의미합니까?',
    answer: '릴게임은 원통형 릴(또는 비디오 화면 속 가상 릴)이 회전하다가 정지했을 때, 심볼들의 가로·대각선 배열(페이라인)이 일치하는지 여부에 따라 결과를 산출하는 아케이드 회전식 게임의 총칭입니다. 19세기 말 미국의 기계식 리버티 벨(Liberty Bell)에서 시작되어, 20세기 전자식 슬롯머신을 거쳐 2000년대 대한민국에서는 비디오 화면과 독자적 예고 연출을 결합한 독특한 아케이드 장르로 자리잡았습니다.'
  },
  {
    category: '수학과 물리',
    question: '릴이 회전하는 동안 플레이어가 정지 버튼을 누르면 결과에 영향을 줍니까?',
    answer: '영향을 주지 못합니다. 현대 디지털 릴게임 시스템에서는 시작 버튼이나 레버를 당긴 1,000분의 1초 찰나에 내부 RNG(난수생성기)에 의해 결과가 이미 영구 확정됩니다. 화면에서 릴이 3초간 서서히 감속하며 멈추는 것은 플레이어에게 극적인 긴장감을 선사하기 위한 시각적 연출(Theatrical Presentation)일 뿐이며, 버튼을 누르는 물리적 타이밍은 결과 번호를 바꿀 수 없습니다.'
  },
  {
    category: '사회문화적 맥락',
    question: '한국 아케이드 역사에서 6대 릴게임(바다이야기 등)이 차지하는 위치는 무엇입니까?',
    answer: '2000년대 초중반 바다이야기, 야마토, 손오공, 황금성, 오션파라다이스, 알라딘은 성인 아케이드 게임장을 장악하며 폭발적인 산업 팽창을 일으켰습니다. 그러나 상품권 환전 제도와 연타 예고 연출이 결합되면서 극심한 사회적 병리 현상을 낳았고, 이는 결국 2006년 정부의 대대적 단속과 게임산업진흥법 전면 개정, 사행산업통합감독위원회 신설로 이어지며 한국 게임 규제사의 분수령이 되었습니다.'
  },
  {
    category: '연출 심리학',
    question: '화려한 예고 연출(고래, 체리, 불꽃 등)은 당첨 확률을 올려줍니까?',
    answer: '아닙니다. 예고 연출은 결과가 나온 뒤에 이를 포장하기 위해 미리 정의된 연출 테이블에 따라 화면에 재생되는 클립일 뿐입니다. 연출이 당첨 확률 자체를 변동시키는 것이 아니며, 연출과 당첨 확률은 엄격히 독립 분리되어 있습니다. 고래를 보았기 때문에 당첨되는 것이 아니라, 이미 당첨이 결정되었기 때문에 시스템이 고래 영상을 틀어준 것입니다.'
  },
  {
    category: '아카이브 철학',
    question: '이 아카이브 사이트의 설립 목적과 관점은 무엇입니까?',
    answer: '본 디지털 아카이브는 사행성 오락을 권장하거나 중개하는 상업 사이트가 아니며, 한국 대중문화 및 게임 테크놀로지 역사 속에서 거대한 파장을 남긴 릴게임의 기계·알고리즘 구조, 사회문화적 변천사, 그리고 수학적 진실(RNG와 연출의 분리)을 객관적이고 학술적인 시각에서 기록·보존하기 위한 비영리 프리미엄 에디토리얼 아카이브입니다.'
  }
];
