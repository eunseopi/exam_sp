afc.import("Framework/afc/component/APanel.js");

QuestionView = class QuestionView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)
		//TODO:edit here
        this.listData = [
            {img : 'Assets/ic_profile_50.png', title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
            id : 'kisung123', date : '2024/09/04', answer : '답글', answerCount: '1', views : '조회', viewsCount: '58', like : '추천', likeCount: '0'},
            {img : 'Assets/ic_profile_50.png', title : '단축키 질문', 
            id : '개굴', date : '2024/05/31', answer : '답글', answerCount: '1', views : '조회', viewsCount: '106', like : '추천', likeCount: '0'},
            {img : 'Assets/ic_profile_50.png', title : '3.3 이상의 버전들에 관해', 
            id : 'RuinedLife', date : '2024/05/31', answer : '답글', answerCount: '1', views : '조회', viewsCount: '192', like : '추천', likeCount: '0'},
            {img : 'Assets/ic_profile_50.png', title : 'stock 컴포넌트 차트 그리기 관련 예제', 
            id : '무우옹오앙앙', date : '2023/03/23', answer : '답글', answerCount: '1', views : '조회', viewsCount: '183', like : '추천', likeCount: '0'},
            {img : 'Assets/ic_profile_50.png', title : '최신 API 문서 제공 문의', 
            id : 'ckdv', date : '2023/03/09', answer : '답글', answerCount: '1', views : '조회', viewsCount: '130', like : '추천', likeCount: '0'},
            {img : 'Assets/ic_profile_50.png', title : 'Tomcat 구동 문의', 
            id : 'KKKKKKKKK', date : '2023/01/13', answer : '답글', answerCount: '1', views : '조회', viewsCount: '131', like : '추천', likeCount: '0'},
            {img : 'Assets/ic_profile_50.png', title : 'css code 문의', 
            id : '두가', date : '2023/01/09', answer : '답글', answerCount: '3', views : '조회', viewsCount: '161', like : '추천', likeCount: '1'},
            {img : 'Assets/ic_profile_50.png', title : 'MS Office 엑셀 파일 다운로드 컴포넌트가 제공 되나요?', 
            id : '야곱', date : '2022/11/23', answer : '답글', answerCount: '2', views : '조회', viewsCount: '105', like : '추천', likeCount: '0'},
            {img : 'Assets/ic_profile_50.png', title : '글자(font) size 에 대해서 문의 합니다.', 
            id : '야곱', date : '2022/11/23', answer : '답글', answerCount: '2', views : '조회', viewsCount: '75', like : '추천', likeCount: '0'},
            {img : 'Assets/ic_profile_50.png', title : '스파이더젠 테마 관련', 
            id : 'aawlwaa', date : '2022/09/21', answer : '답글', answerCount: '1', views : '조회', viewsCount: '116', like : '추천', likeCount: '0'},
        ]

        var data;
        this.dropBox.addItem('작성자',data);
        this.dropBox.addItem('제목',data);
        this.dropBox.addItem('내용',data);

        var listDatas = this.listData.length;
        this.countList.setText(`${listDatas}개의 질문응답이 있습니다.`);

	}

	async onInitDone()
	{
		super.onInitDone()

		//TODO:edit here
        await this.listView.addItem('Source/Items/ListItemView.lay', this.listData);
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onOnLoginBtnClick(comp, info, e)
	{

		//TODO:edit here
        var wnd = new AWindow('login');

        wnd.setWindowOption({
            isModal : true,
            isFocusLostClose : true,
            isCenter: true,
            isParent: true,
            modalBgOption : 'light',
            isDraggable: false,
        })

        wnd.open('Source/views/loginView.lay', null, 300, 300, 412, 390).then(() => {
        })
	}

    onDocumentBtnClick(comp, info, e)
	{
		//TODO:edit here
         this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/views/documentView.lay', 'documentView');

            navi.goPage('documentView');
        })
	}

	onHomeBtnClick(comp, info, e)
	{

		//TODO:edit here
         this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/TestView.lay', 'testView');

            navi.goPage('testView');
        })
	}

	onIntroBtnClick(comp, info, e)
	{

		//TODO:edit here
        this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/views/IntroduceView.lay', 'introView');

            navi.goPage('introView');
        })
	}

	onRegisterBtnClick(comp, info, e)
	{

		//TODO:edit here
        this.naviView.loadContainer(null, 'viewCntr').then((cntr) => 
        {
            var navi = new ANavigator('navi', cntr);
            navi.registerPage('Source/views/RegisterView.lay', 'registView');

            navi.goPage('registView');
        })
	}
}

