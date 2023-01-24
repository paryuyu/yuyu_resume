
export const projectData = [
  {
    id: 1,
    title: '커뮤니티 사이트',
    description: '게시글 작성 및 조회, 각 게시글에 댓글 작성 가능한 커뮤니티 웹 사이트',
    period: ["2022-07-18", "2022-07-22"],
    responsiblePart: ["server-side", "client-side"],
    service:['로그인','회원가입','프로필 사진 등록','글 작성 및 사진 등록','댓글 등록'],
    detail:['아이디 중복체크','글 등록 시 공개 선택 가능','상세보기에서 댓글 작성'],
    usedSkills:{
    language: 'JavaScript',
    Database: 'MongoDB',
    libraryAndFramework: ['express', 'EJS'],
    tools: ['postman'],
    
  },
    githubLink: ["https://github.com/paryuyu/Community_Project.git"],
    process: true
  }, {
    id: 2,
    title: 'Pets',
    description: '공공 데이터 포탈의 오픈 API를 이용한 유기동물 조회 웹 사이트',
    service:['자료조회'],
    detail:['장소별 날짜별 조회','상세조회'],
    period: ["2022-08-23", "2022-08-26"],
    responsiblePart: ["client-side"],
    usedSkills:{
    language: 'JavaScript',
    Database: 'MongoDB',
    libraryAndFramework: ['React.js'],
    tools:['postman'],
    },
    githubLink: ["https://github.com/paryuyu/pets.git"],
    WebSite:"https://paryuyu.github.io/pets/",
    process: true
  }, {
    id: 3,
    title: '온라인 가계부',
    description: '가계부 작성 및 조회 웹 사이트',
    service:['회원가입','로그인','로그아웃','지출 및 소비 작성 및 조회'],
    detail:['chartjs를 통해 시각화한 자료로 조회 가능','날짜별 조회 가능'],
    period: ["2022-08-29", "2022-08-31"],
    responsiblePart: ["server-side", "client-side"],
    usedSkills:{language: 'JavaScript',
    Database: 'MongoDB',
    libraryAndFramework: ['express', 'React.js', 'chart.js'],
    tools:[ 'postman']},
    githubLink: ["https://github.com/paryuyu/MoneyBook.git"],
    process: true
  },
  {
    id: 4,
    title: 'Tour',
    description: '공공 데이터 포탈의 오픈 API 및 카카오 지도를 활용한 광주광역시 관광 단지 조회 웹 사이트',
    service:['장소검색','장소에 대한 상세정보 조회'],
    detail:['kakao map api로 open api에 대해 학습','텍스트 정보를 시각화','react component 학습'],
    period: ["2022-09-01", "2022-09-07"],
    responsiblePart: ["client-side"],
    usedSkills:{
    language: 'JavaScript',
    Database: '',
    libraryAndFramework: ['express', 'React.js'],
    tools: ['postman'],},
    githubLink: ["https://github.com/paryuyu/tour.git"],
    process: true
  }, {
    id: 5,
    title: 'Daygram',
    description: '간편하게 작성하고 조회하는 다이어리 모바일 앱',
    service:['회원가입','로그인','게시글 작성, 조회, 수정, 삭제','이미지 등록 및 수정','날짜 선택 및 수정','투두리스트 작성 및 삭제','로그아웃','탈퇴'],
    detail:['2인으로 진행한 팀 프로젝트','회원가입 시 비밀번호 암호화','로그인 시 비밀번호 대조후 jwt 토큰 생성 후 클라이언트로 전송','AsyncStorage에 토큰 값 저장','탈퇴: 암호화 된 비밀번호 대조 후 일치 시에 데이터 베이스에서 회원삭제','이미지 게시','투두리스트 등록 및 삭제','태그별 모아보기','이미지 미리보기','일기가 등록된 날은 달력에서 점으로 표시'],
    period: ["2022-10-05", "2022-10-18"],
    responsiblePart: ["server-side", "client-side"],
    usedSkills:{
    language: 'JavaScript',
    Database: 'MongoDB',
    libraryAndFramework: ['express', 'React Native', 'Expo'],
    tools: ['postman', 'github'],},
    githubLink: ["https://github.com/Mokoel/Diary-App.git"],
    process: true
  }, {
    id: 6,
    title: 'AirBnB Clone Coding',
    description: '숙소 예약 사이트 에어비앤비 클론코딩 사이트',
    service:['회원가입','로그인','숙소등록','숙소조회','카테고리 별 숙소 조회','숙소 예약','호스트 및 게스트의 예약 확인','숙소 삭제'],
    detail:['next-auth를 통해 로그인 구현','10단계를 거쳐 숙소 등록','숙소 등록 중간 정보 저장','중간 저장된 숙소들은 숙소등록 첫 페이지에서 확인','카테고리별로 숙소 조회','페이팔 테스트 계정으로 예약 가능','예약페이지에서 기존 예약 내역과 중복되는 날짜 선택 불가능','예약정보 조회 시 숙소 고유 아이디 값으로 populate해서 숙소 정보 조회','숙소 관리 페이지에서 숙소 삭제 예약이 존재하면 불가능'],
    period: ["2022-11-03", "2022-11-30"],
    responsiblePart: ["server-side", "client-side"],
    usedSkills:{
    language: 'TypeScript',
    Database: 'MongoDB',
    libraryAndFramework: ['Next.js', 'mui'],
    tools: ['postman', 'github'],},
    githubLink: ["https://github.com/paryuyu/Airbnb-Clone-Project.git"],
    WebSite: "https://edupollproject.vercel.app/",
    process: true,
    images:["/images/projectImg/airbnb/1.jpeg",
    "/images/projectImg/airbnb/2.jpeg",
    "/images/projectImg/airbnb/3.jpeg",
    "/images/projectImg/airbnb/4.jpeg",
    "/images/projectImg/airbnb/5.jpeg",
    "/images/projectImg/airbnb/6.jpeg",
    "/images/projectImg/airbnb/7.jpeg",]
  },
  {
    id: 7,
    title: '책책책!',
    description: '알라딘 검색 API를 활용한 독서 기록 모바일 앱',
    service: ['회원가입', '로그인', '검색', '기록 저장', '북마크'],
    detail:['jwt를 이용한 토큰 생성 및 조회','bcrypt를 통한 비밀번호 암호화','정규식을 통한 아이디와 비밀번호 조건 확인','회원정보, 책정보, 작성글 데이터베이스에 저장 및 조회'],
    period: ["2022-10-01"],
    responsiblePart: ["server-side", "client-side"],
    usedSkills:{
    language: 'JavaScript',
    Database: 'MongoDB',
    libraryAndFramework: ['React Native', 'Expo', 'express', 'mongoose'],
    tools: ['postman', 'github'],},
    githubLink: ["https://github.com/paryuyu/book.git"],
    process: false
  }, {
    id: 8,
    title: '디스코드 약식 클론 코딩',
    description: 'socket.io를 이용하여 양방향 소통을 이해하고 학습하기 위하여 진행된 토이 프로젝트',
    service: ['회원가입', '로그인', '채팅'],
    detail:['미들웨어로 토큰 유효성 검사','데이터 베이스에 회원 정보 저장','bcrypt를 통한 비밀번호 암호화','socket.io를 이용한 통신'],
    period: ["2022-12-13"],
    responsiblePart: ["server-side", "client-side"],
    usedSkills:{
    language: 'JavaScript',
    Database: 'MongoDB',
    libraryAndFramework: ['React.js','mui', 'express', 'mongoose'],
    tools: ['postman', 'github'],},
    githubLink: ["https://github.com/paryuyu/server_discord.git", "https://github.com/paryuyu/discord_client.git"],
    process: false
  }, {
    id: 9,
    title: 'With',
    description: '장소리뷰를 등록할 수 있는 모바일 앱',
    service: ['회원가입', '로그인', '작성', '조회','사진등록'],
    detail:['텍스트 자료(위도,경도)를 시각화 자료(구글 맵 이미지)로 전환','firebase로 회원가입 및 로그인 구현','사진을 등록 및 조회'],
    period: [],
    responsiblePart: ["server-side", "client-side"],
    usedSkills:{
    language: 'JavaScript',
    Database: 'Firebase',
    libraryAndFramework: ['React Native','Expo'],
    tools: ['postman', 'github'],},
    githubLink: ["https://github.com/paryuyu/WITH.git"],
    process: false
  }

]