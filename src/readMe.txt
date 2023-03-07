좌측의 이미지와 같이 폴더 구조를 생성하세요.  
1.src 폴더 안에 redux 폴더를 생성
2.redux 폴더 안에 config, modules 폴더를 생성
4.config 폴더 안에 configStore.js파일을 생성합니다.

각각의 폴더와 파일은 역할이 있습니다.
-redux : 리덕스와 관련된 코드를 모두 모아 놓을 폴더 입니다.
-config : 리덕스 설정과 관련된 파일들을 놓을 폴더 입니다.
-configStore : “중앙 state 관리소" 인 Store를 만드는 설정 코드들이 있는 파일 입니다.
-modules : 우리가 만들 State들의 그룹이라고 생각하면 됩니다. 
    를 들어 투두리스트를 만든다고 한다면, 투두리스트에 필요한 state들이 모두 모여있을 todos.js를 생성하게 되텐데요, 
    이  todos.js 파일이 곧 하나의 모듈이 됩니다.