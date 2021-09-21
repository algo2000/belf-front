# Belf-front

## 프로젝트 세팅

```bash
// 프로젝트 셍성
$ npx create-next-app belf-front --ts

// stlyed-components typescript 패키지 설치
$ npm i styled-components
$ npm i -D @types/styled-components

// styled-components ssr 사용을 위한 세팅
$ npm i -D babel-plugin-styled-components
```

## 폴더 구조

```text
./
├── components
├── hooks
├── libs
├── node_modules
├── pages
├── public
├── states
└── types
```

## 커밋 규칙

| Type     | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| init     | hello, world 수준의 동작이 검증된 첫 파일을 추가할 때                  |
| add      | 코드나 테스트, 예제, 문서 등의 추가가 있을 때                          |
| del      | 파일 또는 코드, 리소스 제거                                            |
| up       | 원래도 정상동작 하지만 추가 보안 하는 개념                             |
| fix      | 올바르지 않은 동작을 고친 경우에                                       |
| docs     | 문서 수정                                                              |
| refactor | 코드 리팩토링 (변수명 수정 등) 기능에는 변함이 없어야합니다            |
| style    | 코드 인덴트 변경으로 인한 코드 스타일 변경, 코드 자체 변경이 없는 경우 |
| ci/cd    | ci/cd와 같은 행위를 강제로 수행해야 할 때 (강제로 수행한 이유 작성)    |
| use      | 특별히 무언가를 사용해 구현을 하는 경우                                |
| move     | 코드 및 파일의 이동이 있을 때                                          |
| rename   | 파일명이 변경될 때                                                     |
| package  | 패키지를 추가했을 때                                                   |
